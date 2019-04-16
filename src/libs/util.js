import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

let util = {};

/**
 * aes
 *
 * @type {string}
 */
util.AES_KEY = CryptoJS.enc.Latin1.parse('1234567812345678');
util.AES_IV = CryptoJS.enc.Latin1.parse('1234567812345678');

/**
 * 令牌存放在Cookie中的key
 *
 * @type {string}
 */
util.tokenKey = 'x-auth-token';

/**
 * 设置浏览器标题
 *
 * @param title
 */
util.title = function (title) {
    title = title ? title + ' - 门户网站' : '门户网站';
    window.document.title = title;
};

/**
 * 从Cookie中获取令牌
 *
 * @returns {*}
 */
util.token = function () {
    const token = Cookies.get(this.tokenKey);
    if (token) {
        return token;
    }
    return false;
};

/**
 * 从Cookie中移除令牌
 */
util.removeToken = function () {
    Cookies.set(this.tokenKey, '', {expires: -1});
};

/**
 * 向Cookie中添加令牌
 */
util.setToken = function (token) {
    Cookies.set(this.tokenKey, token, {expires: 30});
};

/**
 * 拼接请求参数
 *
 * @param data
 * @returns {*}
 */
util.params = function (data) {
    if (data.constructor !== Object) {
        return data;
    }

    let arr = [];
    for (let key in data) {
        let obj = data[key];
        if (obj === undefined || obj === null) {
            continue;
        }
        if (obj.constructor === Array) {
            let a = [];
            for (let i in obj) {
                a.push(encodeURI(params(obj[i])));
            }
            arr.push(key + '=' + a.join(','));
        } else if (obj.constructor === Object) {
            arr.push(key + '=' + params(obj));
        } else {
            arr.push(key + '=' + encodeURI(obj));
        }
    }
    return arr;
};

/**
 * aes加密
 *
 * @param data
 * @returns {string}
 */
util.encrypt = function (data) {
    data = CryptoJS.AES.encrypt(JSON.stringify(data), util.AES_KEY, {
        iv: util.AES_IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    }).toString();
    return JSON.stringify(data);
};

/**
 * aes解密
 *
 * @param data
 * @returns {Object}
 */
util.decrypt = function (data) {
    if (!data) {
        return {};
    }

    let decrypted = CryptoJS.AES.decrypt(data, util.AES_KEY, {
        iv: util.AES_IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    }).toString(CryptoJS.enc.Utf8);

    return JSON.parse(decrypted);
};

export default util;
