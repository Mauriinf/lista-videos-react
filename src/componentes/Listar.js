import React from "react";
import {Link} from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";

class Listar extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { datosCargados:false,
              movies:[]  

    }
    cargarDatos(){
        fetch("http://localhost:8080/api/movies", { mode: 'cors' })
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            console.log(datosRespuesta)
            this.setState({datosCargados:true,movies:datosRespuesta})
        })
        .catch(console.log())
    }
    componentDidMount(){
        this.cargarDatos();
    }
    render() { 
        const{datosCargados,movies}=this.state
        if(!datosCargados){
            return(<div>Cargando.......</div>);
        }else{
            return ( 
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>categoria</th>
                        <th>titulo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    movies.map(
                        (video)=>(
                            <tr>
                                <td className="row">{video.id}</td>
                                <td>{video.category}</td>
                                <td>{video.title}</td>
                            </tr>
                        )
                    )
                        
                    }
                    
                </tbody>
            </table> 
            );
        }
        
    }
}
 
export default Listar;


