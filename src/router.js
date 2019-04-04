function layout(resolve) {
    return require(['./views/layout/index.vue'], resolve);
}

const routers = [{
    path: '/',
    redirect: '/index',
    component: (resolve) => layout(resolve),
    children: [
        {
            path: '',
            name: 'index',
            component: (resolve) => require(['./views/default/index.vue'], resolve)
        },
        {
            path: 'news',
            name: 'news',
            meta: {
                title: '今日头条'
            },
            component: (resolve) => require(['./views/news/index.vue'], resolve)
        },
        {
            path: 'news/:newsId',
            name: 'newsDetail',
            meta: {
                title: '详情'
            },
            component: (resolve) => require(['./views/news/detail.vue'], resolve)
        },
        {
            path: 'about',
            name: 'about',
            meta: {
                title: '关于我们'
            },
            component: (resolve) => require(['./views/default/about.vue'], resolve)
        }, {
            path: 'login',
            name: 'login',
            meta: {
                title: '用户登录'
            },
            component: (resolve) => require(['./views/default/login.vue'], resolve)
        }, {
            path: 'register',
            name: 'register',
            meta: {
                title: '注册'
            },
            component: (resolve) => require(['./views/default/register.vue'], resolve)
        }, {
            path: '*',
            name: '404',
            meta: {
                title: '404'
            },
            component: (resolve) => require(['./views/error/404.vue'], resolve)
        }
    ]
}];

export default routers;
