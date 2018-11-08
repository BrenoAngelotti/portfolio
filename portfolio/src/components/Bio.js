import React, { Component } from 'react';
import { Button } from 'mdbreact';
import './../index.css';

export class Bio extends Component{
    render(){
      return (
        <div id="Bio" className="section odd row">
          <div className="center col-xs-10 col-sm-10 col-md-4">
            <h1 className="profile-name">{this.props.data.name}</h1>
            <img src={this.props.data.picture} className="profile-picture" alt={"foto de " + this.props.data.name}/>
            <p style={{fontSize: 20}}>{this.props.data.minibio}</p>
          </div>
          <div className="col-xs-10 col-sm-10 col-md-3">
            <div>
              <h3>Intereresses</h3>
              <ul>
                {this.props.data.details.interests.map((interest, i) => <li key={i}>{interest}</li>)}
              </ul>
            </div>
            <div>
              <h3>Idiomas</h3>
              <ul>
                {this.props.data.details.languages.map((language, i) => <li key={i}>{language.language} - {language.proficiency}</li>)}
              </ul>
            </div>
            <div>
              <h3>Educação</h3>
              <ul>
                {this.props.data.details.education.map((e, i) => <li key={i}>{e.title} ({e.status})<br/>{e.place}, {e.date}</li>)}
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-sm-10 center">
            <Button style={{margin: 20}} href={this.props.data.resume} target="_blank" color="elegant">Currículo completo</Button>
          </div>
        </div>
      );
    }
  }