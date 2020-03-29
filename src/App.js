import React, { Component } from 'react';
import Buscador from './components/Buscador';


class App extends Component {
  state = {  
    termino : ''
  }

  consultarApi = () => {

    const url =`https://pixabay.com/api/?key=9803988-eb03abdf00e1cce9018f2716d&q=${this.state.termino}`;
    console.log(url);
  } 

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () =>{
      this.consultarApi();
    })
  }


  render() { 
    return ( 
      <div className='app container'>
        <div className= 'jumbotron'>
            <p className='lead text-center'>Buscador de imágenes</p>
            <Buscador
            datosBusqueda= {this.datosBusqueda} />
        </div>
        {this.state.termino}
      </div>
     );
  }
}
 
export default App;