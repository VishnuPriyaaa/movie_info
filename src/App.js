import React from 'react';
import Movie from './components/elements/Movie';
import Header from './components/elements/Header';
import { GlobalStyle } from './components/styles/GlobalStyle'
import Home from './components/elements/Home';
import {withRouter, Route, Switch} from 'react-router-dom';

export default withRouter(function App() {

  return (
    <>
   
    <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Movie} />
      </Switch>
    <GlobalStyle />
   
    </>
    
      
      
  );
});