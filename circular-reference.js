'use strict';

function doSomething(data) {
    data.callback = function() {
        console.log('name=' + data.name);
    };
}

setInterval(function() {
    doSomething({
        name: 'foo',
        data: new Array(10000000).join('*')
    });

}, 100);
