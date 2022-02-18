import React from 'react';
import { useSelector } from 'react-redux';
import { eliminarAsincrono } from '../actions/actionAgregar';
import { useDispatch } from 'react-redux';
import { Tr, TrBody } from '../styleds/ListarStyleds';

export const ListarMovies = () => {
    
        const dispatch = useDispatch();
        
        const { movies } = useSelector(store => store.movie); 

    return(
        <div>
        <table className="table text-center mt-3">

            <thead>
                <Tr>
                    <th>Imagen</th>
                    <th>Tutulo</th>
                    <th>Genero</th>
                    <th>Calificación</th>
                    <th>Descripcion</th>
                    <th>Duracion</th>
                    <th>Fecha de Lanzamiento</th>
                </Tr>
            </thead>
            <tbody>
                {
                    movies.map((movie, index) => (
                        <TrBody key={index}>
                            <td><img src={movie.img} width="50" height="50" alt="Img pelis"/></td>
                            <td>{movie.title}</td>
                            <td>{movie.genero}</td>
                            <td>{movie.vote}</td>
                            <td><div>{movie.descripcion}</div></td>
                            <td>{movie.duracion}</td>
                            <td>{movie.fechaLanzamiento}</td>
                            <td> 
                                <button style={{border:'1px solid #FED941'}}>
                                    <svg width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg> Editar
                                </button> <br/>
                                <button style={{border:'1px solid RGBA(235,62,64,1)'}} onClick={() => dispatch(eliminarAsincrono(movie.title))}>
                                <svg width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg> Eliminar
                                </button> 
                            </td>

                        </TrBody>
                    ))
                }
            </tbody>
        </table>
    </div>
    )
}