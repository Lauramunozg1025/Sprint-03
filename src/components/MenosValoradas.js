import React, { useState, useEffect } from 'react';
import Card from './Cards';
import Carrusel from './Carrusel';

export const MenosValoradas = () => {

    const [movies, setMovies] = useState()

    useEffect(() => {
        getMovies()
    }, [])

    
    const getMovies = async () => {
        let pagina = 2
        const resp = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d84c76a56f9e7906b35cbc70d7577635&language=es-ES&page=${pagina}`)  
        const data = await resp.json()
        const resultados = data.results

        // for (let i = 1; i  < 3; i++) {
        //     const resp = await (await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d84c76a56f9e7906b35cbc70d7577635&language=es-ES&page=' + [i])).json()
        //     const array = resp.results
        //     array.forEach(peliculas => {

        //         if (peliculas.vote_average < 4){
        //             // console.log(peliculas)
        //         }else {
        //             return <h1>No hay</h1>
        //         }
        //     });
        // }

        let filtro = resultados.filter(function(peli){
            return peli.vote_average < 4
        })
        setMovies(filtro)
    }

    return(
        <div>
            <Carrusel/>
            <main style={{margin: '90px'}}>
                <h1 style={{color: 'white'}}> Menos valoradas</h1>
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