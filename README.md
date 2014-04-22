# http-body-parse

Parse and cache the body of a http request (supports json, form data and nested form data)

Credits to the team of [formidable](https://github.com/felixge/node-formidable)

## Installation

	$ npm install http-body-parse

## Usage

The result is cached and only ever parsed once per request.

	var httpBodyParse = require('http-body-parse');

	// using promises
	var data = httpBodyParse(request)
		.then(function( fields ){
			console.log(fields);
		});

	// using callback

	var data = httpBodyParse(request, function( fields ){
		console.log(fields);
	});

## License

MIT © [Thomas Jensen](http://tjconcept.dk)