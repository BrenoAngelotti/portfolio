import React, { Component } from 'react';
import './../index.css';

export class Skills extends Component{
    render(){
      return (
        <div id="Skills"  className="section even">
            <h3 className="col-sm-12 center">Habilidades:</h3>
            <ul>
                {this.props.data.skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
        </div>
      );
    }
  }