import React, { Component } from 'react';
import './../index.css';

export class Info extends Component{
    render(){
      return (
        <div id="Info"  class="section odd">
            <h2 class="col-sm-12 center">Info</h2>
            <div>
                <h3>Biografia</h3>
                <p>{this.props.data.bio}</p>
            </div>
            <div>
                <h3>Trabalho</h3>
                <p>{this.props.data.carrer}</p>
            </div>           
        </div>
      );
    }
  }