/// <reference path="./typings/tsd.d.ts"/>​
// import express = require('express');
var express = require('express')
import routes = require('./app/routes/indexRoutes');
import documentRoutes = require('./app/routes/documentRoutes');

import http = require('http');
import path = require('path');
import mongoose = require('mongoose');
import documentController = require('./app/controllers/documentController');
var bodyParser = require('body-parser')
import WebSocket = require('ws');
import models = require('./app/models/messageModel');

var port: number = process.env.PORT || 3001;
var WebSocketServer = WebSocket.Server;
var server = new WebSocketServer({ port: port });

server.on('connection', ws => {
	ws.on('message', message => {
		try {
			var userMessage: models.UserMessage = new models.UserMessage(message);
			broadcast(JSON.stringify(userMessage));
			documentController.testUpdateDocument(userMessage.message);
		} catch (e) {
			console.error(e.message);
		}
	});
});

function broadcast(data: string): void {
	server.clients.forEach(client => {
		client.send(data);
	});
};

console.log('Server is running on port', port);


/*
 * Main application entry file.
 * Please note that the order of loading is important.
 */

mongoose.connect('mongodb://localhost/dbTexd');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('views', './app/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });

app.get('/', routes.index);
app.get('/document', documentRoutes.read);
app.post('/document', documentRoutes.update);

app.post('/document', function(req, res) {
    var user_id = req.body;
	console.log(req.body)
	console.log(req.body.text)

    res.send(req.body)
});

app.listen(3000, function(){
    console.log("Demo Express server listening on port %d", 3000);
});

export var App = app;
