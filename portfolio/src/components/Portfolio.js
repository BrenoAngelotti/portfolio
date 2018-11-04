import React, { Component } from 'react';
import './../index.css';

export class Portfolio extends Component{
    render(){
      return (
        <div id="Portfolio" class="section even">
            <h2>Portfólio</h2>
            {this.props.data.portfolio.map((p, i) => 
                <div key={i}>
                    <h3>{p.name}</h3>
                    <img src={p.image} />
                    <p>{p.description}</p>
                    <a href={p.link} target="_blank" class="button">Ver</a>
                </div>
            )}
        </div>
      );
    }
}
