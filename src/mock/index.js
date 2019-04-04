import Mock from 'mockjs';

import success from './success';
import categories from './categories';

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

export default Mock;
