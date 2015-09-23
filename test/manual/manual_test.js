var apiGen = require('../../lib/api-generator.js'),
    configList = [__dirname + '/../../sampleConfig.json'];
    
var config = {
	"name" : "fetchGithubApiEndpoints",
	"type" : "REQUEST",
	"methods" : [
		{
			"type" : "GET",
			"url"    : "https://api.github.com",
			"callback": function (err, data) {
				if (!err) { 
					console.log(data);
				}
				console.log("Error!", err);
			}
		}
	]
};
    
var myApi = apiGen([config]);

console.log(myApi);
console.log(myApi.fetchGithubApiEndpoints);
console.log(myApi.fetchGithubApiEndpoints.GET);

console.log(myApi.fetchGithubApiEndpoints.GET());