'use strict';

var Q = require('../index.js');
console.log(Q);

exports.deferred = function() {
    return Q.defer();
}
