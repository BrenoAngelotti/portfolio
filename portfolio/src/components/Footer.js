import React, { Component } from 'react';
import './../index.css';

export class Footer extends Component{
    render(){
      return (
        <div id="Footer" class="footer">
            <a href={this.props.data.linkedin} target="_blank">LinkedIn</a>
            <a href={this.props.data.github} target="_blank">GitHub</a>
            <a href={this.props.data.twitter} target="_blank">Twitter</a>
        </div>
      );
    }
  }