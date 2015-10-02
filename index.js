'use strict';

var Promise = require('bluebird');
var formidable = require('formidable');
var extend = require('extend');
var qs = require('qs');
var debug = require('debug')('http-body-parse');

Promise.promisifyAll(formidable.IncomingForm.prototype);

module.exports = function( request ) {
	debug('parsing body');

	if (!request._parsedBody)
		request._parsedBody = new Promise(function( resolve ){
			resolve((new formidable.IncomingForm()).parseAsync(request));
		})
			.spread(extend)
			.then(function( data ) {
				var contentType = request.headers['content-type'];

				if (contentType && contentType.match(/json/i)) {
					debug('processed json body to %o', data);
				} else {
					data = qs.parse(data);
					debug('processed body to %o', data);
				}

				return data;
			});

	return request._parsedBody;
};
