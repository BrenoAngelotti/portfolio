import React, { Component } from 'react';
import './../index.css';

export class Nav extends Component{
    render(){
      return (
        <div class="App-header">
          <a>{this.props.data.name}</a>
          <a href="#Bio">Home</a>
          <a href="#Skills">Habilidades</a>
          <a href="#Blog">Blog</a>
          <a href="#Portfolio">Portfólio</a>
          <a href="#Info">Mais Info</a>
          <a href="#Form">Contato</a>
        </div>
      );
    }
  }