import React, { Component } from 'react';
import './Buscador.scss';


class Buscador extends Component {

    busquedaRef = React.createRef();
    handleData = (e) => {
        e.preventDefault();
        //tomams el valor del input
        const termino = (this.busquedaRef.current.value)
        //enviamos el valor al componente principal
        this.props.datosBusqueda(termino);
    }


    render() { 
        return ( 
            <form onSubmit={this.handleData}>
                <div className='row'>
        
                    <div className='form-group col-md-8'>
                        <input ref={this.busquedaRef} type='text' className='form-control form-control-lg' placeholder='Busca tu imagen. Ejemplo: limón'/>
                    </div>
                    <div className='form-group col-md-4'>
                        <input submit='text' className='btn btn-lg btn-block btn-danger' value='Buscar...'/>
                    </div>
                </div>
            </form>
         );
    }
}
 
export default Buscador;