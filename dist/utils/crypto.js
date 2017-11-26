"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const constant_1 = require("../config/constant");
function decryptData(sessionKey, encryptedData, iv) {
    const _sessionKey = new Buffer(sessionKey, 'base64');
    const _encryptedData = new Buffer(encryptedData, 'base64');
    const _iv = new Buffer(iv, 'base64');
    let result;
    try {
        const decipher = crypto.createDecipheriv('aes-128-cbc', _sessionKey, _iv);
        decipher.setAutoPadding(true);
        let decoded = decipher.update(_encryptedData, 'binary', 'utf8');
        decoded += decipher.final('utf8');
        result = JSON.parse(decoded);
    }
    catch (err) {
        throw new Error('Illegal Buffer');
    }
    if (result.watermark.appid !== constant_1.WX_APPID) {
        throw new Error('Illegal Buffer');
    }
    return result;
}
exports.decryptData = decryptData;
