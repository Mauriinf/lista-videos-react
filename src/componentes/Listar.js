import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
export default function Listar(){
    const [tasks, setTasks] = useState([]);
    const listaMovies = async () => {
        const response = await fetch("http://127.0.0.1:8080/api/movies", { mode: 'cors' });
        const data = await response.json();
        console.log(data);
    };
    
    useEffect(()=>{
        listaMovies()
    },[])
    return ( 
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>correo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="row">1</td>
                    <td>oscar</td>
                    <td>maur@gemai.com</td>
                    <td><div className="btn-group" role="group" aria-label="">
                        <button type="button" className="btn btn-primary">Editar</button>
                        <button type="button" className="btn btn-danger">Eliminar</button>
                    </div></td>
                </tr>
            </tbody>
        </table> 
        );
}
/*
class Listar extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { datosCargados:false }
    cargarDatos(){
        fetch("http://127.0.0.1:8080/api/movies", { mode: 'cors' })
        .then(respuesta=>respuesta)
        .then((datosRespuesta)=>{console.log(datosRespuesta)})
        .catch(console.error(this.props.url))
    }
    componentDidMount(){
        this.cargarDatos();
    }
    render() { 
        return ( <table className='table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>correo</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="row">1</td>
                <td>oscar</td>
                <td>maur@gemai.com</td>
                <td><div className="btn-group" role="group" aria-label="">
                    <button type="button" className="btn btn-primary">Editar</button>
                    <button type="button" className="btn btn-danger">Eliminar</button>
                </div></td>
            </tr>
        </tbody>
    </table> );
    }
}
 
export default Listar;
*/

