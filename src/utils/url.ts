import { WX_APPID, WX_SECRET } from '../config/constant';

export function getSessionUrl(jsCode: string) {
    return `https://api.weixin.qq.com/sns/jscode2session?appid=${WX_APPID}&secret=${WX_SECRET}&js_code=${jsCode}&grant_type=authorization_code`;
}
