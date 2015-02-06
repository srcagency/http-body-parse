# http-body-parse

[![Join the chat at https://gitter.im/srcagency/http-body-parse](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/srcagency/http-body-parse?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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

[MIT](http://opensource.org/licenses/MIT) © [src.agency](http://src.agency)
