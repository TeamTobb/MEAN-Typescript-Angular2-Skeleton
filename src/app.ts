/// <reference path="./extra/node.d.ts"/>
/// <reference path="./extra/express.d.ts"/>
/// <reference path="./extra/serve-static.d.ts"/>

import * as http from "http";
import * as url from "url";
import * as express from "express";
import * as routes from "./routes/index";
​
var app = express();
​​
app.set('views', './src/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });
//app.use(express.static(__dirname + '/public'));
​
// Routes
app.get('/', routes.index);


app.listen(3000, function(){
    console.log("Demo Express server listening on port %d", 3000);
});
​
export var App = app;
