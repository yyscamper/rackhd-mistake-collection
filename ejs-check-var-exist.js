'use strict';

var ejs = require('ejs');
var template = `
<% if (name) { %>
    name=<%=name%>
<% } %>
<% if (showAge) { %>
    age=<%=age%>
<% } %>
`;

var context = {
    // name: 'alan',
    age: 18,
    showAge: true
};

var result = ejs.render(template, context);
console.log(result);
