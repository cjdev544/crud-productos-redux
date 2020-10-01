import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/Products';
import NewProduct from './components/NewProduct'
import UpdateProduct from './components/UpdateProduct';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Router>
    <Provider store={store}>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/productos/nuevo" component={NewProduct} />
          <Route exact path="/productos/editar/:id" component={UpdateProduct} />
        </Switch>
      </div>
    </Provider>
  </Router>
)

export default App;
