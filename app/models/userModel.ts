
import mongoose = require("mongoose");

export var userSchema = new mongoose.Schema({
    name: String
});

export interface IUser extends mongoose.Document {
    name: string;
} 

export var repository = mongoose.model<IUser>("user", userSchema);
