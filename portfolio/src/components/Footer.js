import React, { Component } from 'react';
import './../index.css';

export class Footer extends Component{
    render(){
      return (
        <div id="Footer" className="footer">
            <a href={this.props.data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={this.props.data.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={this.props.data.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      );
    }
  }