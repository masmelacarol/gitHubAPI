import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import '../assets/styles/App.scss';
import Initial from '../pages/Initial';
import Layout from '../components/Layout';

const App = () => {    
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Initial}></Route>
        </Switch>      
      </Layout>
    </BrowserRouter>
  );
}

export default App;