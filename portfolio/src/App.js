import React, { Component } from 'react';
import './App.css';

import { Nav } from "./components/Nav";
import { Bio } from "./components/Bio";
import { Skills } from './components/Skills';
import { Blog } from './components/Blog';
import { Portfolio } from './components/Portfolio';
import { Info } from './components/Info';
import { Form } from './components/Form';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    var data = require('./data.json');
    return (
      <div class="App">
        <Nav data={data} />
        <Bio data={data} />
        <Skills data={data} />
        <Blog data={data} />
        <Portfolio data={data} />
        <Info data={data} />
        <Form data={data} />
        <Footer data={data} />
      </div>
    );
  }
}

export default App;
