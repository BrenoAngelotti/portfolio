import React, { Component } from 'react';
import './../index.css';

export class Form extends Component{
    render(){
        var address = "https://formspree.io/" + this.props.data.email;
        return (
            <div id="Form"  class="section even">
                <h2>Contato</h2>
                <form action={address} method="POST">
                    <label>Nome: <br/>
                        <input type="text" name="name" required/>
                    </label>
                    <br/>
                    <label>Email: <br/>
                        <input type="email" name="_replyto" required/>
                    </label>
                    <br/>
                    <label>Mensagem: <br/>
                        <textarea rows="5" name="message" required/>
                    </label>
                    <br/>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        );
    }
  }