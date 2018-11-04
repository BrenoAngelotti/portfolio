import React, { Component } from 'react';
import './../index.css';

export class Nav extends Component{
    render(){
      return (
        <div class="App-header">
          <a>{this.props.data.name}</a>
          <a href="#Bio">Sobre mim</a>
          <a href="#Skills">Habilidades</a>
        </div>
      );
    }
  }