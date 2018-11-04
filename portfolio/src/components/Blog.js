import React, { Component } from 'react';
import './../index.css';

export class Blog extends Component{
    render(){
      return (
        <div id="Blog" class="section odd">
            <h2>Blog</h2>
            {this.props.data.blog.map((b, i) => 
                <div key={i} class="card">
                    <h3>{b.title}</h3>
                    <p>{b.description}</p>
                    <a href={b.link} target="_blank" class="button">Ver</a>
                </div>
            )}
        </div>
      );
    }
}
