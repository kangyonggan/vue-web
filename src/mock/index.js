import Mock from 'mockjs';

import success from './success';
import categories from './categories';
import news from './news';

/**
 * 登录
 */
Mock.mock(/login/, () => {
    return success;
});

/**
 * 导航栏目
 */
Mock.mock(/categories/, () => {
    return categories;
});

/**
 * 新闻列表
 */
Mock.mock(/news/, () => {
    return news;
});

export default Mock;
