import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'mdbreact';
import './../index.css';

export class Skills extends Component{
    render(){
      return (
        <div id="Skills"  className="section even">
            <h3 className="col-sm-12 center">Habilidades</h3>
            {this.props.data.skills.map((skill, i) => 
            <Card className="skill" key={i}>
              <CardBody>
                <CardTitle>{skill}</CardTitle>
              </CardBody>
            </Card>)}
        </div>
      );
    }
  }