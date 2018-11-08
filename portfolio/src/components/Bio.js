import React, { Component } from 'react';
import { Button } from 'mdbreact';
import './../index.css';

export class Bio extends Component{
    render(){
      return (
        <div id="Bio" className="section odd row">
          <div className="center col-md-4 col-sm-10">
            <h1 className="profile-name">{this.props.data.name}</h1>
            <img src={this.props.data.picture} className="profile-picture" alt={"foto de " + this.props.data.name}/>
            <p>{this.props.data.minibio}</p>
            <Button href={this.props.data.resume} target="_blank" color="elegant">Baixar Currículo</Button>
          </div>
          <div className="col-md-3 col-sm-10">
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
        </div>
      );
    }
  }