import { useEffect, useState } from "react"
import React from 'react'
import { listaDiscos } from "../Servicios/DiscoServicio";


const ComponenteDisco = () => {
    /*const dummyData =[
        {
            "id": 1,
            "artista": "artista1",
            "titulo": "El mejor disco",
            "duracion": 30,
            "cod": "abc123"
        },
        {
            "id": 2,
            "artista": "artista2",
            "titulo": "disco no tan bueno",
            "duracion": 30,
            "cod": "bca123"
        },
        {
            "id": 3,
            "artista": "artista3",
            "titulo": "disco mas o menos bueno",
            "duracion": 30,
            "cod": "aaa123"
        },
        {
            "id": 4,
            "artista": "jinjer",
            "titulo": "flower",
            "duracion": 30,
            "cod": "asd123"
        },
        {
            "id": 5,
            "artista": "nostra morte",
            "titulo": "percefone",
            "duracion": 30,
            "cod": "dsa321"
        },
        {
            "id": 6,
            "artista": "type o negative",
            "titulo": "cinnamon girl",
            "duracion": 30,
            "cod": "awd153"
        }
    ]*/

    const [disco, setDisco] = useState([]);

    useEffect(() => {
        listaDiscos().then ((respuesta) => {
            setDisco(respuesta.data);
        }).catch(error => {
            console.error(error);
        })
    },[])

  return (
    <div>
        <table className="table-fixed border-collapse border">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Artista</th>
                    <th>Titulo</th>
                    <th>Duracion</th>
                    <th>Codigo</th>
                </tr>
            </thead>
            <tbody>
                {
                    disco.map(disco => 
                        <tr key={disco.id}>
                            <td>{disco.id}</td>
                            <td>{disco.artista}</td>
                            <td>{disco.titulo}</td>
                            <td>{disco.duracion}</td>
                            <td>{disco.cod}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ComponenteDisco