"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("../config/url");
function getSessionUrl(jsCode) {
    return `https://api.weixin.qq.com/sns/jscode2session?appid=${url_1.APPID}&secret=${url_1.SECRET}&js_code=${jsCode}&grant_type=authorization_code`;
}
exports.getSessionUrl = getSessionUrl;
