import { IBreadcrumbList } from './navbar.interface'

export const BREADCRUMB_LIST: IBreadcrumbList = [
    {
        key: '/admin/dashboard',
        name: 'Tổng quan',
    },
    {
        key: '/admin/about',
        name: 'About',
        children: [
            {
                key: '/admin/about',
                name: 'About Index',
            },
            {
                key: '/admin/about/index2',
                name: 'About Index 2',
            },
            {
                key: '/admin/about/index3',
                name: 'About Index 3',
            },
        ],
    },
]
