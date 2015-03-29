'use strict';

var _ = require('underscore'), // Require underscore
    request = require('request'), // Require request
    generatedApi = {};

/**
 * Client Accessible Functions
 */
var controller = function (configFileList) {
    _.each(configFileList, function (configFile) {
        // Read in the JSON file
        configFile = require(configFile);
        switch(configFile.type) {
        case 'REQUEST':
            generateRequestApi(config);
            break;
        default:
            throw new Error('Unrecognized API Type: ' + config.type);
    }
    })

    return generatedApi;
};

var generators = {
    generateRequestApi : function (config) {
        generatedApi[config.name]
    }
};

var validators = {
    validateRequestConfig : function (config) {
        return 
    }
}

// Export the client accessible functions for this module
module.exports = controller;