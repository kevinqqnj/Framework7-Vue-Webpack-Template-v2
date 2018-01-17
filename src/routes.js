export default [{
        path: '/',
        component: require('./pages/index.vue')
    },
    {
        path: '/about/',
        component: require('./pages/about.vue')
    },
    {
        path: '/data-table/',
        component: require('./pages/data-table.vue')
    },
    {
        path: '/form/',
        component: require('./pages/form.vue')
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: require('./pages/dynamic-route.vue')
    },
    {
        path: '/panel-left/',
        component: require('./pages/panel-left.vue')
    },
    {
        path: '/color-themes/',
        component: require('./pages/color-themes.vue')
    },
    {
        path: '/tabs-routable/',
        component: require('./pages/tabs-routable.vue'),
        tabs: [{
                path: '/',
                id: 'tab1',
                component: require('./pages/tab1.vue')
            },
            {
                path: '/tab2/',
                id: 'tab2',
                component: require('./pages/tab2.vue')
            },
            {
                path: '/tab3/',
                id: 'tab3',
                component: require('./pages/tab3.vue')
            },
        ],
    },

]
