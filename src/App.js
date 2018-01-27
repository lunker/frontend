import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PostContainer from './containers/PostContainer';

// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import {BrowserRouter, Route, } from 'react-router-dom';


class App extends React.Component{
  render(){
    return(
      <div>
        <span>App!!!</span>
        <PostContainer />
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
