'use strict';

var _ = require('lodash');

var persons = [];
var temp = {};

temp = { name: 'alan' };
persons.push(_.cloneDeep(temp));

temp.name = 'sunny';
persons.push({ name: 'sunny'});

console.log(persons);
