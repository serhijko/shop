export default {
    pos: {
        search: 'Rechercher',
        configuration: 'Configuration',
        language: 'Langue',
        theme: {
            name: 'Theme',
            light: 'Clair',
            dark: 'Obscur',
        },
        dashboard: {
            monthly_revenue: 'CA à 30 jours',
            new_orders: 'Nouvelles commandes',
            pending_reviews: 'Commentaires à modérer',
            new_customers: 'Nouveaux clients',
            pending_orders: 'Commandes à traiter',
            order: {
                items:
                    'par %{customer_name}, un poster |||| par %{customer_name}, %{nb_items} posters',
            },
            welcome: {
                title: 'Bienvenue sur la démo de react-admin',
                subtitle:
                    "Ceci est le back-office d'un magazin de posters imaginaire. N'hésitez pas à explorer et à modifier les données. La démo s'exécute en local dans votre navigateur, et se remet à zéro chaque fois que vous rechargez la page.",
                aor_button: 'Site web de react-admin',
                demo_button: 'Code source de cette démo',
            },
        },
    },
    resources: {
        customers: {
            name: 'Client |||| Clients',
        },
        commands: {
            name: 'Commande |||| Commandes',
        },
        products: {
            name: 'Poster |||| Posters',
        },
        categories: {
            name: 'Catégorie |||| Catégories',
        },
        reviews: {
            name: 'Commentaire |||| Commentaires',
        },
        segments: {
            name: 'Segments',
        },
    },
};
