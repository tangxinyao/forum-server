import * as crypto from 'crypto';

import { WX_APPID } from '../config/constant';

export function decryptData(sessionKey: string, encryptedData: string, iv: string) {
    const _sessionKey = new Buffer(sessionKey, 'base64');
    const _encryptedData = new Buffer(encryptedData, 'base64');
    const _iv = new Buffer(iv, 'base64');

    let result: any;
    try {
        const decipher = crypto.createDecipheriv('aes-128-cbc', _sessionKey, _iv);
        decipher.setAutoPadding(true);
        let decoded = decipher.update(_encryptedData, 'binary', 'utf8');
        decoded += decipher.final('utf8');
        result = JSON.parse(decoded);
    } catch (err) {
        throw new Error('Illegal Buffer');
    }

    if (result.watermark.appid !== WX_APPID) {
        throw new Error('Illegal Buffer');
    }

    return result;
}
