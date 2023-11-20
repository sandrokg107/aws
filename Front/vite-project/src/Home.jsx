import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

function Home(){
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() =>{
        axios.get('http://localhost:8081/')    
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/delete/'+id)
        .then(res => {
            location.reload();
        })
        .catch(err => console.log(err));
    }

    const seacher = (e) => {
        setSearch(e.target.value)
    }
    
    const results = !search ? data : data.filter((dato) => dato.apellidos.toLowerCase().includes(search.toLowerCase()));
    
    return(

        /*<div className='d-flex min-vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-75 bg-success rounded p-4'>
                <h2 className="mb-4">Contactos</h2>
                <p></p>
                <div>
                    <input value={search} onChange={seacher}
                        type="text" placeholder="Ingresar Apellido" className="form-control" />
                </div>
                <p></p>
                <div className="d-flex justify-content-end">
                    <Link to="/create" className="btn btn-info">Crear +</Link>
                </div>
                <p></p>
                <div>
                    {results.map((contactos, index) => (
                        <div className="card bg-secondary mb-4" key={index}>
                            <div className="card-body">
                                <img src="https://media.gq.com.mx/photos/639ab651b258d7ba43866a37/4:3/w_2421,h_1816,c_limit/habitos-de-un-hombre-con-estilo-en-2023.jpg" alt="" className="rounded-circle" width="150" height="150" />
                                <h2 className="card-title text-dark">{contactos.nombre} {contactos.apellidos}</h2>
                                <div className="btn-group" role="group" aria-label="Opciones">
                                    <Link to={`/read/${contactos.id}`} className="btn btn-info">Ver</Link>
                                    <Link to={`/edit/${contactos.id}`} className="btn btn-primary mx-2">Editar</Link>
                                    <button onClick={() => handleDelete(contactos.id)} className="btn btn-dark">Borrar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>*/
        <div className='d-flex min-vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-75 bg-success rounded p-4'>
        <h2 className="mb-4">Contactos</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan="3">
                        <input
                            value={search}
                            onChange={seacher}
                            type="text"
                            placeholder="Ingresar Apellido"
                            className="form-control"
                        />
                    </td>
                </tr>
                {results.map((contactos, index) => (
                    <tr key={index}>
                        <td>
                            <img
                                src="https://media.gq.com.mx/photos/639ab651b258d7ba43866a37/4:3/w_2421,h_1816,c_limit/habitos-de-un-hombre-con-estilo-en-2023.jpg"
                                alt=""
                                className="rounded-circle"
                                width="50"
                                height="50"
                            />
                        </td>
                        <td>
                            <h2 className="text-dark">{contactos.nombre} {contactos.apellidos}</h2>
                        </td>
                        <td>
                            <div className="btn-group" role="group" aria-label="Opciones">
                                <Link to={`/read/${contactos.id}`} className="btn btn-info">
                                    Ver
                                </Link>
                                <Link to={`/edit/${contactos.id}`} className="btn btn-primary mx-2">
                                    Editar
                                </Link>
                                <button onClick={() => handleDelete(contactos.id)} className="btn btn-dark">
                                    Borrar
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="d-flex justify-content-end">
            <Link to="/create" className="btn btn-info">
                Crear +
            </Link>
        </div>
    </div>
</div>
)}

export default Home