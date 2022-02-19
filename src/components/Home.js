import React, { useState, useEffect } from 'react';
import Card from './Cards';
import { API_URL } from '../helpers/url';
import Carrusel from './Carrusel';

export const Home = () => {

    const [movies, setMovies] = useState()

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {
        const resp = await fetch(API_URL)
        const data = await resp.json()
        const respuesta = data.results
        setMovies(respuesta)


        // try {
            // const resp = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d84c76a56f9e7906b35cbc70d7577635&language=es-ES')  
        //     if (resp.status === 200) {
        //         const data = await resp.json()
        //         const resultados = data.results
        //         console.log(resultados)
        //         setMovies(resultados)

        //     }else if (resp.status === 401) {
        //         console.log('la llave esta mal')

        //     }else if (resp.status === 404) {
        //         console.log('la pelicula que buscas no existe')
        //     }else{
        //         console.log('Hubo un error')
        //     }

        // } catch(error) {
        //     console.log(error)
        // }
    }

    return(
        <div>
            <Carrusel />
            <main style={{margin: '90px'}}>
                <h1 style={{color: 'white'}}>Todas las peliculas</h1>
               <div>
                    {
                        movies?.map(movie => (
                            <Card key={movie.id}
                                {...movie} />
                        ))
                    }
               </div>
            </main>
        </div>
    )
}