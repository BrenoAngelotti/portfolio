import React, { Component } from 'react';
import './App.css';

import { Nav } from "./components/Nav";
import { Bio } from "./components/Bio";
import { Skills } from './components/Skills';

class App extends Component {
  render() {
    var data = require('./data.json');
    return (
      <div class="App">
        <Nav data={data} />
        <Bio data={data} />
        <Skills data={data} />
      </div>
    );
  }
}

export default App;
