const React=require('react');
const ReactDOM=require('react-dom');
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {BrowserRouter} from 'react-router-dom';




class App extends React.Component{
  render(){
    return(
      <div>
        App!!!
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={App}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
