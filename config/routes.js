export const sidebarRoutes = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'Analytics',
        url: '/analytics'
    },
    {
        name: 'Users',
        subRoutes: [
            {
                name: 'Overview',
                url: '/users/overview'
            },
            {
                name: 'Leaderboard',
                url: '/users/leaderboard'
            },
            {
                name: 'Add user',
                url: '/users/add-user'
            },
        ]
    },
    {
        name: 'User Profile',
        subRoutes: []
    },
    {
        name: 'Account',
        subRoutes: [
            {
                name: 'Setting',
                url: '/account/setting'
            },
            {
                name: 'Billing',
                url: '/account/billing'
            },
            {
                name: 'Invoice',
                url: '/account/invoice'
            }
        ]
    },
    {
        name: 'E-commerce',
        subRoutes: [
            
        ]
    },
    {
        name: 'Projects',
        subRoutes: [
        ]
    },
    {
        name: 'Authentication',
        subRoutes: []
    },
    {
        name: 'Calendar',
        subRoutes: []
    },
    {
        name: 'Invoice',
        url: "/invoice"
    },
    {
        name: 'Messages',
        url: '/messages'
    }
]