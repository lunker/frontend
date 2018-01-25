const React=require('react');
const ReactDOM=require('react-dom');
import { Router, Route, IndexRoute, browserHistory } from 'react-router';



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
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="post" component={Posts}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
