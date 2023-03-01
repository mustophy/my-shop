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
                name: 'Add User',
                url: '/users/add-user'
            },
        ]
    },
    {
        name: 'User Profile',
        subRoutes: [
            {
                name: 'Profile',
                url: '/user-profile/profile'
            },
            {
                name: 'Teams',
                url: '/user-profile/teams'
            },
            {
                name: 'Projects',
                url: '/user-profile/projects'
            },
            {
                name: 'Connections',
                url: '/user-profile/connections'
            },
            {
                name: 'My profile',
                url: '/user-profile/my-profile'
            },
        ]
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
            {
                name: 'Overview',
                url: '/e-commerce/overview'
            },
            {
                name: 'Products',
                subRoutes: [
                    {

                    }
                ]
            },
            {
                name: 'Orders',
                subRoutes: [
                    {
                        name: 'Orders',
                        url: '/e-commerce/orders/'
                    },
                    {
                        name: 'Order Details',
                        url: '/e-commerce/orders/order-details/'
                    },
                    {
                        name: 'Add order',
                        url: '/e-commerce/orders/add-order/'
                    }
                ]
            },
            {
                name: 'Customers',
                subRoutes: [
                    {
                        name: 'Customers',
                        url: '/e-commerce/customers'
                    },
                    {
                        name: 'Customer details',
                        url: '/e-commerce/customers/customer-details'
                    },
                    {
                        name: 'Add Customer',
                        url: '/e-commerce/add-customer'
                    }
                ]
            },
            {
                name: 'Checkout',
                url: 'e-commerce/checkout'
            }
        ]
    },
    {
        name: 'Projects',
        subRoutes: [
            {
                name: 'Overview',
                url: 'projects/overview'
            }
        ]
    },
    {
        name: 'Authentication',
        subRoutes: []
    },
    {
        name: 'Calendar',
        url: '/calendar'
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