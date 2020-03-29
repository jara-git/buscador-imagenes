import React, { Component } from 'react';
import './Buscador.scss';

class Buscador extends Component {
    render() { 
        return ( 
            <form>
                <div className='row'>
                    <div className='form-group col-md-8'>
                        <input type='text' className='form-control form-control-lg' placeholder='Busca tu imagen. Ejemplo: limón'/>
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