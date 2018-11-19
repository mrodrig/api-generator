# API Generator

**An API generation library for NodeJS.**

[![Dependencies](https://img.shields.io/david/mrodrig/api-generator.svg?style=flat-square)](https://www.npmjs.org/package/api-generator)
[![Build Status](https://travis-ci.org/mrodrig/api-generator.svg?branch=master)](https://travis-ci.org/mrodrig/api-generator)
[![Downloads](http://img.shields.io/npm/dm/api-generator.svg)](https://www.npmjs.org/package/api-generator)
[![NPM version](https://img.shields.io/npm/v/api-generator.svg)](https://www.npmjs.org/package/api-generator)
[![Maintainability](https://api.codeclimate.com/v1/badges/572a1d4298adbdad7fa1/maintainability)](https://codeclimate.com/github/mrodrig/api-generator/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/npm/api-generator/badge.svg)](https://snyk.io/test/npm/api-generator)

## Installation

```bash
$ npm install api-generator
```

## Usage

```javascript
let apiGen = require('api-generator');

let config = {
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

let myApi = apiGen([config]);

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
