import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';

import './App.css';

import dataProvider from './dataProvider';
import { Dashboard } from './dashboard';

const App = () => (
    <Admin
        title="Posters Galore Admin"
        dataProvider={dataProvider}
        dashboard={Dashboard}
    >
        <Resource
            name="customers"
            list={ListGuesser}
        />
        <Resource
            name="commands"
            list={ListGuesser}
        />
        <Resource
            name="products"
            list={ListGuesser}
        />
        <Resource
            name="categories"
            list={ListGuesser}
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
