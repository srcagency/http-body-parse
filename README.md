# http-body-parse

Parse and cache the body of an http request (supports json, form data and nested form data)

Credits to the team of [formidable](https://github.com/felixge/node-formidable)

## Installation

```shell
npm install http-body-parse
```

## Usage

The result is cached and only ever parsed once per request.

```js
var httpBodyParse = require('http-body-parse');

var data = httpBodyParse(request)
	.then(function( fields ){
		console.log(fields);
	});
```

## License

[MIT](http://opensource.org/licenses/MIT) © [Thomas Jensen](http://tjconcept.dk)
