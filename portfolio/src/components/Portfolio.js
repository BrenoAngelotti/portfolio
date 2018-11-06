import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

import './../index.css';

export class Portfolio extends Component{
    render(){
      return (
        <div id="Portfolio" className="section even">
            <h2  className="col-sm-12 center">Portfólio</h2>
            {this.props.data.portfolio.map((p, i) =>
                <Card key={i}>
                    <CardImage className="mx-auto d-block" src={p.image} />
                    <CardBody>
                        <CardTitle>{p.name}</CardTitle>
                        <CardText>{p.description}</CardText>
                    </CardBody>
                    <Button href={p.link} target="_blank" color="elegant">Ver</Button>
                </Card>
            )}
        </div>
      );
    }
}
