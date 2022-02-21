import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { agregarAsincrono, listarAsincrono } from '../actions/actionAgregar';
import { fileUpload } from '../helpers/FileUploas';
import { ListarMovies } from './ListarMovies'
import { H1, DivImagen, DivInputs, ButtonSave } from '../styleds/AgregarStyleds';

export const AgregarMovies = () =>{

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listarAsincrono())
    })

    const formik = useFormik({
        initialValues: {
            img: '', 
            title: '', 
            genero: '',
            vote: '', 
            descripcion: '', 
            duracion: '', 
            fechaLanzamiento: ''
        },
        onSubmit: (data) => {
            dispatch(agregarAsincrono(data))
            
        }

    })

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(response => {
                formik.initialValues.img = response
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return(
        <>
            <div>
                <div style={{float: 'right', width: '600px', height: '700px', margin: '50px'}}>
                    <form onSubmit={formik.handleSubmit} >
                        <H1>Agregar Movies</H1>
                        <div>
                            <DivImagen >
                                <input id="fileSelector" type="file" name="img" style={{ display: 'none' }} onChange={handleFileChanged} />
                                <div onClick={handlePictureClick} >
                                    <svg width="18" height="18" fill="currentColor" className="bi bi-folder2-open" viewBox="0 0 16 16">
                                        <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
                                    </svg> Imagen
                                </div>
                            </DivImagen>
                            <DivInputs >
                                <label for="documento">Titulo de la pelicula</label><br/>
                                <input type="text" name="title" id="title" placeholder="Title" onChange={formik.handleChange} />
                            </DivInputs>
                            <DivInputs >
                                <label for="nombres">Genero</label><br/>
                                <input type="text" name="genero" id="vote" placeholder="Genero" onChange={formik.handleChange} />
                            </DivInputs>
                            <DivInputs >
                                <label for="nombres">Calificacion (del 1 al 10)</label><br/>
                                <input type="text" name="vote" id="vote" placeholder="8.5" onChange={formik.handleChange} />
                            </DivInputs>

                            <DivInputs >
                                <label for="apellidos">Descripcion</label><br/>
                                <input type="text" name="descripcion" id="descripcion" placeholder="Sipnopsis" onChange={formik.handleChange} />
                            </DivInputs>

                            <DivInputs >
                                <label for="telefono">Duracion</label><br/>
                                <input type="text" name="duracion" id="duracion" placeholder="1h" onChange={formik.handleChange} />
                            </DivInputs>

                            <DivInputs className="form-group col-md-4">
                                <label for="celular">Fecha de lanzamiento</label><br/>
                                <input type="date" name="fechaLanzamiento" id="fechaLanzamiento" onChange={formik.handleChange} />
                            </DivInputs>
                            <br/>
                            <div style={{width: '550px', textAlign: 'center'}}>
                                <Link to='/agregarMovie'><ButtonSave value="GUARDAR" type="submit" className="btn btn-outline-dark"/></Link>
                            </div>

                        </div>
                    </form>
                </div>
                <div style={{float: 'left', width: '55%', margin: '50px'}}>
                    <ListarMovies />
                </div>
            </div>

        </>

    )
}