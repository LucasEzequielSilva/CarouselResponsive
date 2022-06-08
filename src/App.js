import React, { Component } from 'react';

import Carousel from './components/Carousel'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> se los dejo con colores descriptivos ;) suerte</h1>
        <Carousel/>
        <p>
          acuerdense de que si las flechas desaparecen es porque en modo mobile queda mocho..
          de igual manera puede poner una media queri y darle un display 
        </p>
      </div>
    );
  }
}

export default App;
