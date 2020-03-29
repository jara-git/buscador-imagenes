import React, {Component, Fragment} from 'react';

class Buscador extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchImage: "",
            imagenes: []
            
        }
    }
   
    updateData = (event) => {
        event.preventDefault();
        
        this.setState({
            searchImage: event.target.value
            
        })
    }

    obtenerDatos = async (event) => {
        event.preventDefault();
        const termino = this.state.searchImage;

        const url =`https://pixabay.com/api/?key=9803988-eb03abdf00e1cce9018f2716d&q=${termino}`;
    
        // console.log(url);
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => this.setState({ imagenes: resultado.hits }))
    
    
      } 
    

    render(){
        return (
            <Fragment>
                <form onSubmit={this.obtenerDatos}>
                
                <div className="row">
                    <div className="form-group col-12 col-md-8 col-xl-4">
                        <input type="text" 
                        className="form-control form-control-lg" 
                        onChange={this.updateData}
                        value={this.state.searchImage}
                        placeholder="Busca tu imagen. Ejemplo: Limón"/>
                    </div>
                    <div className="form-group col-12 col-md-4 col-xl-2">
                        <input type="submit" className="btn btn-lg btn-block btn-info"  value="Buscar"/>
                    </ div>
                </div>
                </form>
                <figure>
                    {this.state.imagenes.map(image => {
                        return(
                            <img className='col-12 col-md-4 col-xl-2 img-thumbnail'src={image.webformatURL} alt={image.user} key= {image.id}/>
                        )
                    })}
                </figure>
            </Fragment>
            
        );
    }
}

export default Buscador;