# API Generator

**An API generation library for NodeJS.**

[![Dependencies](https://img.shields.io/david/mrodrig/accm.svg?style=flat-square)](https://www.npmjs.org/package/accm)
[![Build Status](https://travis-ci.org/mrodrig/api-generator.svg?branch=master)](https://travis-ci.org/mrodrig/api-generator)
[![Downloads](http://img.shields.io/npm/dm/api-generator.svg)](https://www.npmjs.org/package/api-generator)
[![NPM version](https://img.shields.io/npm/v/api-generator.svg)](https://www.npmjs.org/package/api-generator)
[![Maintainability](https://api.codeclimate.com/v1/badges/1765da9b942286c0bb13/maintainability)](https://codeclimate.com/github/mrodrig/accm/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/npm/accm/badge.svg)](https://snyk.io/test/npm/accm)

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
