import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';

import './App.css';

import authClient from './authClient';
import sagas from './sagas';
import themeReducer from './themeReducer';
import dataProvider from './dataProvider';
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

const i18nProvider = locale => messages[locale];

const App = () => (
    <Admin
        title="Posters Galore Admin"
        dataProvider={dataProvider}
        customReducers={{ theme: themeReducer }}
        customSagas={sagas}
        customRoutes={customRoutes}
        authProvider={authClient}
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
            list={ListGuesser}
        />
    </Admin>
);
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
