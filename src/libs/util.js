let util = {};

/**
 * 设置浏览器标题
 *
 * @param title
 */
util.title = function (title) {
    title = title ? title + ' - 门户网站' : '门户网站';
    window.document.title = title;
};

export default util;
