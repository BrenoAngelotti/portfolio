import React, { Component } from 'react';
import { Input, Button } from 'mdbreact';

import './../index.css';

export class Form extends Component{
    render(){
        var address = "https://formspree.io/" + this.props.data.email;
        return (
            <div id="Form"  className="section even">
                <h2  className="col-sm-12 center">Contato</h2>
                <form action={address} method="POST" className="col-md-6">
                    <div className="elegant-text">
                        <Input label="Nome" name="name" icon="user" group type="text" validate error="wrong" success="right"/>
                        <Input label="Email" name="_replyto" icon="envelope" group type="email" validate error="wrong" success="right"/>
                        <Input type="textarea" name="message" rows="3" label="Mensagem" icon="pencil"/>
                    </div>
                    <div className="text-center">
                        <Button color="elegant" type="submit">Enviar</Button>
                    </div>
                </form>
            </div>
        );
    }
  }