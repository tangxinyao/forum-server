import * as request from 'request';

import { decryptData } from '../utils/crypto';
import { getSessionUrl } from '../utils/url';

export function getCryptedData(code: string, encryptedData: string, iv: string) {
    return new Promise((resolve, reject) => {
        request(getSessionUrl(code), (error, response, body) => {
            if (error) {
                reject(error);
                return;
            }
            const sessionInfo = JSON.parse(body);
            if (sessionInfo.errcode) {
                reject(sessionInfo.errmsg);
                return;
            }
            const result = decryptData(sessionInfo['session_key'], encryptedData, iv);
            resolve(result);
        });
    });
}
