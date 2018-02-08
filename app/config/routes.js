// import React from 'react'
import {BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom'
import { MainContainer, HomeContainer, UploadContainer} from '../containers'
import React, { Component } from 'react';

class HomeTest extends Component {
  render() {
    return (
      <div>
        <h1>test</h1>
      </div>
    );
  }
}



const routes = (
  <BrowserRouter>
    <MainContainer>
      <Switch>
      <Route exact path='/' component={HomeContainer} />
      </Switch>
    </MainContainer>
  </BrowserRouter>
)

export default routes
