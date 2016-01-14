import express = require('express');
import path = require('path');

export function index(req: express.Request, res: express.Response) {
    res.sendFile(path.join(__dirname, '../../public/', 'index123.html'));
};
