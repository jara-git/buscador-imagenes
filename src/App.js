import React, { Component } from 'react';
import Buscador from './components/Buscador';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='app container'>
        <div className= 'jumbotron'>
            <p className='lead text-center'>Buscador de imágenes</p>
            <Buscador />
        </div>
      </div>
     );
  }
}
 
export default App;