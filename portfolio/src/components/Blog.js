import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import './../index.css';

export class Blog extends Component{
    render(){
      return (
        <div id="Blog" className="section odd row">
            <h2 className="col-sm-12 center">Blog</h2>
            {this.props.data.blog.map((b, i) => 
                <Card key={i}>
                    <CardImage className="img-fluid" src={b.image}/>
                    <CardBody>
                        <CardTitle color="gray">{b.title}</CardTitle>
                        <CardText>por {b.author}</CardText>
                        <CardText>{b.description}</CardText>
                    </CardBody>
                    <Button href={b.link} target="_blank" color="elegant">Ver</Button>
                </Card>
            )}
        </div>
      );
    }
}
