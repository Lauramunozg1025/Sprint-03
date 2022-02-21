import React, { useState, useEffect } from 'react';
import { ContainerSlider, ListaSlider, MenuSlider, BtnVerAhora, BtnVerDespues } from '../styleds/CarruselStyleds';

const Carrusel = () => {

    const [movies, setMovies] = useState()

    // Creamos el observador 

    useEffect(() => {
        getMovies()
    }, [])

    
    const getMovies = async () => {
        const resp = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d84c76a56f9e7906b35cbc70d7577635&language=es-ES&page=1`)  
        const data = await resp.json()
        const resultados = data.results

        let element = [1,2,3]

        for (let i = 0; i  < element.length; i++) {
            element[i] =  resultados[i]
        }

        setMovies(element)
    }
  return (
    <div>
        <header>
                <ContainerSlider>
                    <ListaSlider>
                        {
                            movies?.map( movie => (
                                    <li id={`slide1`} key={movie.id}>
                                        <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title}/>
                                        <BtnVerAhora>
                                            <svg width="20" height="20" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                            </svg> VER AHORA
                                        </BtnVerAhora>
                                        <BtnVerDespues>
                                            <svg width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                            </svg> VER DESPUES
                                        </BtnVerDespues>
                                    </li>
                            ))
                        }
                    </ListaSlider>

                </ContainerSlider>

                <MenuSlider>
                    <li>
                        <a href="#slide1">1</a>
                    </li>

                    <li>
                    <a href="#slide2">2</a>
                    </li>

                    <li>
                    <a href="#slide3">3</a>
                    </li>
                </MenuSlider>
        </header>
    </div>
  )
}

export default Carrusel