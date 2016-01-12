import express = require("express");
import mongoose = require("mongoose");
import userModel = require("../models/userModel");

import IUser = userModel.IUser;
import repository = userModel.repository;

export function createUser(req: express.Request, res: express.Response) {
    var userName = req.params.name;

    repository.create({ name: userName }, (error, user) => {
        if (error) {
            res.send(error);
        } else {
            res.jsonp(user);
        }
    });
}

export function retrieveUser(req: express.Request, res: express.Response) {
    var userName = req.params.name;

    repository.findOne({ name: userName }, (error, user) => {
        if (error) {
            res.send(error);
        } else {
            res.jsonp(user);
        }
    });
}

export function retrieveUsers(req: express.Request, res: express.Response) {
    repository.find((error, users) => {
        if (error) {
            res.send(error);
        } else {
            res.jsonp(users);
        }
    });
}
