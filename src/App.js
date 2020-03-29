import React, { Component } from 'react';
import Buscador from './components/Buscador';

export default class App extends Component {

  render() { 
    return ( 
      <div className='app container'>
        <div className= 'jumbotron col-12'>
            <p className='lead text-center'>Buscador de imágenes</p>
            <Buscador />
        </div>
      </div>
     );
  }
}
 