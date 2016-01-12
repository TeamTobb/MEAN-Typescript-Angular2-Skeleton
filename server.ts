/// <reference path="./typings/tsd.d.ts"/>​
import express = require('express');
import routes = require('./app/routes/indexRoutes');
import user = require('./app/routes/userRoutes');
import http = require('http');
import path = require('path');
import mongoose = require('mongoose');


/*
 * Main application entry file.
 * Please note that the order of loading is important.
 */
mongoose.connect('mongodb://localhost/dbTexd');

var app = express();
app.use(express.static(__dirname + '/public'));

app.set('views', './app/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/users/:name', user.read);
app.post('/users/:name', user.create);

app.listen(3000, function(){
    console.log("Demo Express server listening on port %d", 3000);
});

export var App = app;
