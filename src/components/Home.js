import React, { useState, useEffect } from 'react';
import Card from './Cards';
// import { API_URL } from '../helpers/url';
import Carrusel from './Carrusel';

export const Home = () => {
    let pagina = 1
    const [movies, setMovies] = useState()
    const [element, setElement] = useState()

    // Creamos el observador 

    const observador = React.useRef(new IntersectionObserver((entradas) => {
        const first = entradas[0]
        if(first.isIntersecting){
            pagina ++
            getMovies()

        }
   }, {
       rootMargin: '0px 800px 0px',
       threshold: 0.5
   }) 
    )

    useEffect(() => {
        const currentElement = element;
        const currentObserver = observador.current;

        if(currentElement){
            currentObserver.observe(currentElement);
        }

        return () => {
            if(currentElement){
                currentObserver.unobserve(currentElement);
            }
        }

    }, [element])

    useEffect(() => {
        getMovies()
    }, [element])

    const getMovies = async () => {
        try {
            const resp = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d84c76a56f9e7906b35cbc70d7577635&language=es-ES&page=${pagina}`)  
            if (resp.status === 200) {
                const data = await resp.json()
                const resultados = data.results
                setMovies(resultados)

            }else if (resp.status === 401) {
                console.log('la llave esta mal')

            }else if (resp.status === 404) {
                console.log('la pelicula que buscas no existe')
            }else{
                console.log('Hubo un error')
            }

        } catch(error) {
            console.log(error)
        }
    }


    return(
        <div>
            <Carrusel/>
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
               <div ref={setElement} ></div>
            </main>
        </div>
    )
}