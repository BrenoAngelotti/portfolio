import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import './../index.css';

export class Bio extends Component{
    render(){
      return (
        <div id="Bio" class="section odd row">
          <div class="center col-md-6 col-sm-12">
            <h2>{this.props.data.name}</h2>
            <img src={this.props.data.picture} class="profile-picture"/>
            <p>{this.props.data.minibio}</p>
            <Button href={this.props.data.resume} target="_blank" color="elegant">Baixar Currículo</Button>
          </div>
          <div class="col-md-6 col-sm-12">
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