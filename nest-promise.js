'use strict';

var Promise = require('bluebird');
var fs = require('fs');
Promise.promisifyAll(fs);

function dumpFile(filename) {
    return fs.readFileAsync(filename)
    .then(function(data) {
        console.log(data.toString());
    });
}

function test() {
    return dumpFile('foo.txt')
    .then(function() {
        dumpFile('bar.txt');
    })
    .then(function() {
        console.log('END!');
    });
}

test();
