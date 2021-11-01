import type { MenuSection } from "@/shared/types/menuItem";

export const navigation: MenuSection[] = [
    {
        title: 'Dashboard',
        items: [
            {
                name: 'overview',
                title: 'Overview',
                route: '/app',
                icon: 'view-grid-outline'
            },
        ]
    },
    {
        title: 'Users',

        items: [
            {
                name: 'customers',
                title: 'Customers',
                route: '/app/customers',
                icon: 'users-outline',
            },

        ]
    },
    {
        title: 'Products',

        items: [

            {
                name: 'products',
                title: 'Products',
                route: '/app/products',
                icon: 'archive-outline',
            },

        ]
    },
    {
        title: 'Settings',

        items: [

            {
                name: 'settings',
                title: 'Settings',
                route: '/app/settings',
                icon: 'cog-outline',
            },

        ]
    }

]