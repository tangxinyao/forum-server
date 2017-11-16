"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
function connectDB(url, options) {
    const db = mongoose.connection;
    db.on('error', (err) => {
        console.log('connection error:', err);
    });
    db.once('open', () => {
        console.log('connection success.');
    });
    mongoose.createConnection(url, options);
}
exports.connectDB = connectDB;
