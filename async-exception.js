'use strict';

var Promise = require('bluebird');

function testCallback() {
    try {
        setTimeout(function() {
            console.log('200ms elapses!');
            throw new Error('timeout error');
        }, 200);
    } catch (err) {
        console.log(err);
    }

    setTimeout(function() {
        console.log('400ms elapses!');
    }, 400);
}

function testPromise() {
    return Promise.resolve()
    .then(function() {
        setTimeout(function() {
            console.log('100ms elapses!');
            throw new Error('timeout error');
        }, 100);
   })
    .then(function() {
        console.log('Then before catch!');
    })
    .catch(function(err) {
        console.log('In Promise catch!');
        console.log(err);
    });
}

//testCallback(); //jshint ignore: line
testPromise();
