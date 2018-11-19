'use strict';

let _ = require('underscore'), // Require underscore
    request = require('request'), // Require request
    promise = require('bluebird'), // Require bluebird
    requestAsync = promise.promisifyAll(request),
    generatedApi = {};

/**
 * Client Accessible Functions
 */
let controller = function (configList) {
    _.each(configList, function (config) {
        // If we are given a string, try reading the file that is at the given path
        //   since this should be a config file
        if (_.isString(config)) {
            config = require(config);
        }
        
        switch(config.type) {
            case 'REQUEST':
                generators.generateRequestApi(config, false);
                break;
            case 'REQUEST_PROMISIFIED':
                generators.generateRequestAsyncApi(config, true);
                break;
            default:
                throw new Error('Unrecognized API Type: ' + config.type);
    }
    });

    return generatedApi;
};

// Functions that generate the client-accessible API functions
let generators = {
    generateRequestApi : function (config, async) {
        // If the configuration is not valid:
        if (!validators.validateRequestConfig(config)) {
            let errorMsg = "Invalid configuration file for: " + config.name;
            console.log(errorMsg);
            // TODO: consider better approaches?
            generatedApi[config.name] = errorMsg;
        }
        // Read the config and set up appropriate functions
        generatedApi[config.name] = {};
        
        // For each of the methods, add the appropriate function to the client API
        _.each(config.methods, function (method) {
            let opts = {
                    method: method.type,
                    uri:    method.url
            };
            generatedApi[config.name][method.type] = function (options) {
                // Add headers, data, etc. from options into opts; Keeps the uri and method the same!
                options = _.defaults(opts, options); 
                return async ? request(options, method.callback)
                             : requestAsync(options);
            };
        });
    }
};

// Functions that returns a boolean of whether or not the configuration is valid
let validators = {
    validateRequestConfig : function (config, async) {
        return config.name && config.type && 
            (config.methods.length ? 
                _.reduce(config.methods, 
                         function (acc, method) { 
                             return acc && method.type && method.url &&
                                        // Checks for a callback only when we aren't using the promisified version
                                        (async ? true : method.callback);
                         },
                         true)
                : true);
    }
};

// Export the client accessible functions for this module
module.exports = controller;