export default {
    pos: {
        search: 'Search',
        configuration: 'Configuration',
        language: 'Language',
        theme: {
            name: 'Theme',
            light: 'Light',
            dark: 'Dark',
        },
        dashboard: {
            monthly_revenue: 'Monthly Revenue',
            new_orders: 'New Orders',
            pending_reviews: 'Pending Reviews',
            new_customers: 'New Customers',
            pending_orders: 'Pending Orders',
            order: {
                items:
                    'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
            },
            welcome: {
                title: 'Welcome to react-admin-demo',
                subtitle:
                    "This is the admin of an imaginary poster shop. Fell free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
                aor_button: 'react-admin site',
                demo_button: 'Source for this demo',
            },
        },
    },
    resources: {
        customers: {
            name: 'Customer |||| Customers',
        },
        commands: {
            name: 'Order |||| Orders',
        },
        products: {
            name: 'Poster |||| Posters',
        },
        categories: {
            name: 'Category |||| Categories',
        },
        reviews: {
            name: 'Review |||| Reviews',
        },
        segments: {
            name: 'Segments',
        },
    },
};
