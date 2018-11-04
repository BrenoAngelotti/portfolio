import React, { Component } from 'react';
import './../index.css';

export class Skills extends Component{
    render(){
      return (
        <div id="Skills"  class="section even">
            <h3>Habilidades:</h3>
            <ul>
                {this.props.data.skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
        </div>
      );
    }
  }