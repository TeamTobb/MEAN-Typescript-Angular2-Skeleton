import express = require('express');

export function index(req: express.Request, res: express.Response) {
    res.sendfile('./public/index123.html');
};
