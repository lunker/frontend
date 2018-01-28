'use strict';

import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'
import axios from 'axios';


class Project extends Component {

  constructor(props){
    super(props);
  }

  registerProject () {
    console.log("register project");

    axios.get('http://localhost:8080/api/project', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }).then((response)=>{
      console.log(response);
    });
  }// end method 

  render(){
    return (
      <div>
          <h2>
            <Button color="red" onClick={this.registerProject}>Click Here</Button>
          </h2>
      </div>
    )
  }
};

export default Project;
