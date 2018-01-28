import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Header extends Component{
  render() {
    return (
      <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/project">Project</Link></li>
        </ul>
        <hr/>
      </div>
    );
  }
}

export default Header;
