import React, { Component } from 'react';
import './../index.css';

export class Bio extends Component{
    render(){
      return (
        <div id="Bio" class="section odd">
          <div>
            <h2>{this.props.data.name}</h2>
            <img src={this.props.data.picture} class="profile-picture"/>
            <p>{this.props.data.minibio}</p>
            <a href={this.props.data.resume} target="_blank">Baixar Currículo</a>
          </div>
          <div>
            <h3>Intereresses</h3>
            <ul>
              {this.props.data.details.interests.map((interest, i) => <li key={i}>{interest}</li>)}
            </ul>
          </div>
        </div>
      );
    }
  }