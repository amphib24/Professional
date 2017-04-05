'use strict'
const pg = require('pg');
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const conString = process.env.DATABASE_URL || 'postgres://localhost:5432';
// DONE: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

app.get('index.html', function(request, response) {
  console.log('new request:', request.url);
  response.sendFile('index.html', {root:'./public'});
});

app.listen(PORT, function() {

  console.log('server is up and running on PORT 3000 and can be accessed at localhost:3000 in your browser');
});
