import React, { Component } from 'react';

import Carousel from './components/Carousel'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> se los dejo con colores descriptivos ;) suerte</h1>
        <h4>
          para instalar la libreria es:
        </h4>
        <p>npm install react-grid-carousel y si les hace quilombo mandenle un force xd</p>
        <p>npm install react-grid-carousel --force</p>
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
