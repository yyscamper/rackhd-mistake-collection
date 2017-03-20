'use strict';

var assert = require('assert-plus');
var Promise = require('bluebird');
var fs = require('fs');
Promise.promisifyAll(fs);

function readFile(filename) {
    assert.string(filename);

    return fs.readFileAsync(filename)
    .then(function(data) {
        console.log('Profile data: ' + data.toString());
        return data.toString();
    });
}

function getProfile(profile) {
    return readFile(profile)
    .then(function(data) {
        return data;
    })
    .catch(function(err) {
        console.log(err);
        return 'ERROR PROFILE';
    });
}

getProfile(null);





//////////////////////////////////////////////////////////////
// UNIT-TEST
/////////////////////////////////////////////////////////////
global.chai = require('chai');
global.chai.use(require('chai-as-promised'));
global.expect = chai.expect;

function unittestReadFile() {
    expect(readFile('foo.txt')).to.be.resolved;
    // expect(readFile(null)).to.be.rejected;

    expect(function() {
        readFile(null);
    }).to.throw(Error);
}

//unittestReadFile();
