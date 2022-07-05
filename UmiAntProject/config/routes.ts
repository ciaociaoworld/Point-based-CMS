export default [
    { path: '/', component: '@/pages/index' },
    { path: '/login', component: '@/pages/login', layout: false },
    {
        path: '/login',
        name: 'Home',
        component: '@/pages/login', layout: false
    },
    {
        path: '/',
        component: '@/layouts/index',
        name: 'overview',
        icon: 'crown',
        access: 'isAdmin',
        routes: [
            {
                path: '/user',
                exact: false,
                component: '@/pages/user/index',
                name: 'user',
                icon: 'crown',
                access: 'isEditor',
                wrappers: ['@/wrappers/auth'],
            },
            {
                path: '/userInfo',
                name: 'userInfo',
                access: 'canAccess',
                exact: false,
                component: '@/pages/user/index',
            },
        ],
    },
];
