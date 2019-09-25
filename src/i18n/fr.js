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
            fields: {
                address: 'Rue',
                birthday: 'Anniversaire',
                city: 'Ville',
                commands: 'Commandes',
                first_name: 'Prénom',
                first_seen: 'Première visite',
                groups: 'Segments',
                has_newsletter: 'Abonné à la newsletter',
                has_ordered: 'A commandé',
                last_name: 'Nom',
                last_seen: 'Vu le',
                last_seen_gte: 'Vu depuis',
                name: 'Nom',
                latest_purchase: 'Dernier achat',
                total_spent: 'Dépenses',
                zipcode: 'Code postal',
            },
            tabs: {
                identity: 'Identité',
                address: 'Adresse',
                orders: 'Commandes',
                reviews: 'Commentaires',
                stats: 'Statistiques',
            },
        },
        commands: {
            name: 'Commande |||| Commandes',
            fields: {
                customer_id: 'Client',
                date_gte: 'Passées depuis',
                date_lte: 'Passées avant',
                nb_items: 'Nb articles',
                reference: 'Référence',
                returned: 'Annulée',
                status: 'Etat',
                total_gte: 'Montant minimum',
            },
        },
        products: {
            name: 'Poster |||| Posters',
        },
        categories: {
            name: 'Catégorie |||| Catégories',
        },
        reviews: {
            name: 'Commentaire |||| Commentaires',
            fields: {
                customer_id: 'Client',
                product_id: 'Produit',
                date: 'Date',
                comment: 'Texte',
                rating: 'Classement',
            },
        },
        segments: {
            name: 'Segments',
            fields: {
                customers: 'Clients',
                name: 'Nom',
            },
            data: {
                compulsive: 'Compulsif',
                collector: 'Collectionneur',
                ordered_once: 'A commandé',
                regular: 'Régulier',
                returns: 'A renvoyé',
                reviewer: 'Commentateur',
            },
        },
    },
};
