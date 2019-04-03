function layout(resolve) {
    return require(['./views/layout.vue'], resolve);
}

const routers = [{
    path: '/',
    redirect: '/index',
    component: (resolve) => layout(resolve),
    children: [
        {
            path: 'index',
            name: 'index',
            meta: {
                title: '首页'
            },
            component: (resolve) => require(['./views/index.vue'], resolve)
        },
        {
            path: 'article',
            name: 'article',
            meta: {
                title: '文章列表'
            },
            component: (resolve) => require(['./views/article.vue'], resolve)
        }
    ]
}, {
    path: '/login',
    name: 'login',
    meta: {
        title: '用户登录'
    },
    component: (resolve) => require(['./views/login.vue'], resolve)
}, {
    path: '/*',
    name: '404',
    component: (resolve) => require(['./views/error/404.vue'], resolve)
}];

export default routers;
