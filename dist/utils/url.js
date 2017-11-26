"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require("../config/constant");
function getSessionUrl(jsCode) {
    return `https://api.weixin.qq.com/sns/jscode2session?appid=${constant_1.WX_APPID}&secret=${constant_1.WX_SECRET}&js_code=${jsCode}&grant_type=authorization_code`;
}
exports.getSessionUrl = getSessionUrl;
