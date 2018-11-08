import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'mdbreact';
import './../index.css';

export class Skills extends Component{
    render(){
      return (
        <div id="Skills"  className="section even row">
            <h3 className="col-sm-12 center">Principais Habilidades</h3>
            <div className="col-sm-10 col-md-6" style={{display: 'flex', flexFlow: 'wrap row', alignItems: 'center', justifyContent: 'center'}}>
            {this.props.data.skills.map((skill, i) => 
            <Card className="skill" key={i}>
              <CardBody>
                <CardTitle>{skill}</CardTitle>
              </CardBody>
            </Card>)}
            </div>
        </div>
      );
    }
  }