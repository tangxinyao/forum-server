"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
function handlePreSave(next) {
    this.updatedTime = new Date();
    next();
}
const userSchema = new mongoose.Schema({
    avatarUrl: String,
    city: String,
    createdTime: { type: Date, default: Date.now() },
    gender: String,
    mobile: String,
    nickName: String,
    province: String,
    updatedTime: { type: Date }
});
userSchema.pre('save', handlePreSave);
exports.User = mongoose.model('User', userSchema);
