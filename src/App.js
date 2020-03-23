import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoadingRoute from './Loading/Loading';
import { DataStore } from './Store/Store/DataSore';
import { Provider } from 'react-redux';
import './App.css';

const Home = React.lazy(() => import('./Home/Home.js'));
const Admin = React.lazy(() => import('./Admin/Admin.js'));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={DataStore}>
        <Router>
          <React.Suspense fallback={<LoadingRoute />}>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/admin-site' component={Admin} />
              <Redirect to='/' />
            </Switch>
          </React.Suspense>
        </Router>
      </Provider>
    );
  }
}
