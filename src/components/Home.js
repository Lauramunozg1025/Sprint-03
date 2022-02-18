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
        try {
            const resp = await fetch(API_URL)
            const data = await resp.json()
            const results = data.results;
            setMovies(results)
        } catch(error) {
            console.log(error)
        }
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