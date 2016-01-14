import express = require("express");
import controller = require("../controllers/documentController");

/*
 * User Routes
 */
 
export function read(req: express.Request, res: express.Response) {
    controller.retrieveDocument(req, res);
};

export function update(req: express.Request, res: express.Response) {
    controller.updateDocument(req, res);
};
