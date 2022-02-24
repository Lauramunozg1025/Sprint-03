import React, { useState, useEffect } from 'react';
import Card from './Cards';
import Carrusel from './Carrusel';

export const MasValoradas = () => {

    const [movies, setMovies] = useState()

    useEffect(() => {
        getMovies()
    }, [])
    
    const getMovies = async () => {
        const resp = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d84c76a56f9e7906b35cbc70d7577635&language=es-ES&page=1`)  
        const data = await resp.json()
        const resultados = data.results

        let filtro = resultados.filter(function(peli){
            return peli.vote_average >= 7.5
        })
        setMovies(filtro)
    }

    return(
        <div>
            <Carrusel/>
            <main style={{margin: '90px'}}>
                <h1 style={{color: 'white'}}>Mas valoradas</h1>
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