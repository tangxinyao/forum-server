import { APPID, SECRET } from '../config/url';

export function getSessionUrl(jsCode: string) {
    return `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${jsCode}&grant_type=authorization_code`;
}
