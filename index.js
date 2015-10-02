'use strict';

var Promise = require('bluebird');
var formidable = require('formidable');
var assign = require('object-assign');
var qs = require('qs');
var debug = require('debug')('http-body-parse');

Promise.promisifyAll(formidable.IncomingForm.prototype);

module.exports = function( request ) {
	debug('parsing body');

	if (!request._parsedBody)
		request._parsedBody = (new formidable.IncomingForm())
			.parseAsync(request)
			.spread(assign)
			.then(function( data ){
				var contentType = request.headers['content-type'];

				if (contentType && ~contentType.indexOf('json')) {
					debug('processed json body to %o', data);
				} else {
					data = qs.parse(data);
					debug('processed body to %o', data);
				}

				return data;
			});

	return request._parsedBody;
};
