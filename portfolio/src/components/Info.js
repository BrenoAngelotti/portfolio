import React, { Component } from 'react';
import './../index.css';

export class Info extends Component{
    render(){
      return (
        <div id="Info"  className="section odd">
            <h2 className="col-sm-12 center">Info</h2>
            <div className="col-sm-10 col-md-4">
                <h3>Biografia</h3>
                <p>{this.props.data.bio}</p>
            </div>
            <div className="col-sm-10 col-md-4">
                <h3>Trabalho</h3>
                <p>{this.props.data.carrer}</p>
            </div>           
        </div>
      );
    }
  }