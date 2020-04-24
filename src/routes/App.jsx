import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../assets/styles/pages/App.scss';

import Layout from '../components/Layout';
import InitialPage from '../pages/InitialPage';
import HomePage from '../pages/HomePage';
import UserGitPage from '../pages/UserGitPage';

const App = () => {    
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={InitialPage}></Route>
            <Route exact path="/home" component={HomePage}></Route>
            <Route exact path="/:userGit" component={UserGitPage}></Route>
        </Switch>      
      </Layout>
    </BrowserRouter>
  );
}

export default App;