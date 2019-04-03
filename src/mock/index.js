import Mock from 'mockjs'

import categories from "./categories";

/**
 * 导航栏目
 */
Mock.mock(/categories/, req => {
    return categories;
});

export default Mock;
