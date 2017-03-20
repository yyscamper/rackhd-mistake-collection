'use strict';
var _ = require('lodash');

var obj = {
    a: 1,
    b: null,
    c: undefined,
    d: NaN,
    e: 2
};
delete obj.e;

console.log(obj);
console.log('has a? ' + _.has(obj, 'a'));
console.log('has b? ' + _.has(obj, 'b'));
console.log('has c? ' + _.has(obj, 'c'));
console.log('has d? ' + _.has(obj, 'd'));
console.log('has e? ' + _.has(obj, 'e'));
