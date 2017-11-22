"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const crypto_1 = require("../utils/crypto");
const url_1 = require("../utils/url");
function getCryptedData(code, encryptedData, iv) {
    return new Promise((resolve, reject) => {
        request(url_1.getSessionUrl(code), (error, response, body) => {
            if (error) {
                reject(error);
                return;
            }
            const sessionInfo = JSON.parse(body);
            if (sessionInfo.errcode) {
                reject(sessionInfo.errmsg);
                return;
            }
            const result = crypto_1.decryptData(sessionInfo['session_key'], encryptedData, iv);
            resolve(result);
        });
    });
}
exports.getCryptedData = getCryptedData;
