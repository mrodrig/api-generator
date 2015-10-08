# API Generator

[![Build Status](https://travis-ci.org/mrodrig/api-generator.svg?branch=master)](https://travis-ci.org/mrodrig/api-generator)
![David - Dependency Checker Icon](https://david-dm.org/mrodrig/api-generator.png)
[![Monthly Downloads](http://img.shields.io/npm/dm/api-generator.svg)](https://www.npmjs.org/package/api-generator)
[![NPM version](https://img.shields.io/npm/v/api-generator.svg)](https://www.npmjs.org/package/api-generator)
[![bitHound Score](https://www.bithound.io/github/mrodrig/api-generator/badges/score.svg)](https://www.bithound.io/github/mrodrig/api-generator)

A memoization and caching library for NodeJS.

## Installation

```bash
$ npm install api-generator
```

## Usage

```javascript
var apiGen = require('api-generator');

var config = {
	"name" : "fetchGithubApiEndpoints",
	"type" : "REQUEST",
	"methods" : [
		{
			"type" : "GET",
			"url"    : "https://api.github.com",
			"callback": function (err, data) {
				if (!err) { 
					console.log("Success!", data);
				}
				console.log("Error!", err);
			}
		}
	]
};

var myApi = apiGen([config]);

console.log(myApi);
// => { fetchGithubApiEndpoints: { GET: [Function] } }
```

## Tests

Coming soon...

```bash
$ npm test
```

_Note_: This requires `mocha`, `should`, and `underscore`.

## Features

- Automatic API Generation
- Easily extensible
- Simplifies repeated API generation