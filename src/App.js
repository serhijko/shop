import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';

import './App.css';

import authProvider from './authProvider';
import sagas from './sagas';
import themeReducer from './themeReducer';
import Login from './Login';
import Layout from './Layout';
import Menu from './Menu';
import { Dashboard } from './dashboard';
import customRoutes from './routes';
import messages from './i18n';
import {
    VisitorEdit,
    VisitorIcon,
    VisitorList,
} from './visitors';

import { CommandEdit, CommandIcon, CommandList } from './commands';
import {
    ProductCreate,
    ProductEdit,
    ProductIcon,
    ProductList,
} from './products';
import { CategoryEdit, CategoryIcon, CategoryList } from './categories';
import { ReviewEdit, ReviewIcon, ReviewList } from './reviews';

import dataProvider from './dataProvider';
import fakeRestServer from './fakeServer';

const i18nProvider = locale => messages[locale];

class App extends Component {
    componentWillMount() {
        this.restoreFetch = fakeRestServer();
    }

    componentWillUnmount() {
        this.restoreFetch();
    }

    render() {
        return (
            <Admin
                title="Posters Galore Admin"
                dataProvider={dataProvider}
                customReducers={{ theme: themeReducer }}
                customSagas={sagas}
                customRoutes={customRoutes}
                authProvider={authProvider}
                dashboard={Dashboard}
                loginPage={Login}
                appLayout={Layout}
                menu={Menu}
                locale="en"
                i18nProvider={i18nProvider}
            >
                <Resource
                    name="customers"
                    list={VisitorList}
                    edit={VisitorEdit}
                    icon={VisitorIcon}
                />
                <Resource
                    name="commands"
                    list={CommandList}
                    edit={CommandEdit}
                    icon={CommandIcon}
                    options={{ label: 'Orders' }}
                />
                <Resource
                    name="products"
                    list={ProductList}
                    create={ProductCreate}
                    edit={ProductEdit}
                    icon={ProductIcon}
                />
                <Resource
                    name="categories"
                    list={CategoryList}
                    edit={CategoryEdit}
                    icon={CategoryIcon}
                />
                <Resource
                    name="reviews"
                    list={ReviewList}
                    edit={ReviewEdit}
                    icon={ReviewIcon}
                />
            </Admin>
        );
    }
}

export default App;
