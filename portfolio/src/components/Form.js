import React, { Component } from 'react';
import { Input, Button, Card, CardBody, CardTitle } from 'mdbreact';
import './../index.css';

export class Form extends Component{
    render(){
        var address = "https://formspree.io/" + this.props.data.email;
        return (
            <div id="Form"  className="section even row">
                <h2  className="col-sm-12 center">Contato</h2>
                <Card className="col-sm-10 col-md-8 col-lg-6">
                    <CardBody>
                        <CardTitle>Deixe sua mensagem</CardTitle>
                        <form action={address} method="POST">
                            <div className="elegant-text">
                                <Input label="Nome" name="name" icon="user" group type="text" validate error="wrong" success="right" required/>
                                <Input label="Email" name="_replyto" icon="envelope" group type="email" validate error="wrong" success="right" required/>
                                <Input type="textarea" name="message" rows="3" label="Mensagem" icon="pencil" required/>
                            </div>
                            <div className="text-center">
                                <Button color="elegant" type="submit">Enviar</Button>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </div>
        );
    }
  }