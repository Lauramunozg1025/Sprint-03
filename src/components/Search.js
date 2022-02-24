import React, { useState, useEffect } from 'react';
import Card from './Cards';
import Carrusel from './Carrusel';

export const Search = () => {

    const [movies, setMovies] = useState()
    const [busqueda, setBusqueda ] = useState()
    const [title, setTitle ] = useState()

    useEffect(() => {
        getSearch()
    }, [])

    const getMovies = async () => {
        let pagina = 1
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

    const handledInputChange = (e)=> {
        const textBusqueda = e.target.value
        setBusqueda(textBusqueda)
        getSearch(textBusqueda)
    }

    const getSearch = async (titulo) => {
        const resp = await fetch('http://api.themoviedb.org/3/search/movie?api_key=d84c76a56f9e7906b35cbc70d7577635&query=' + titulo)
        const data = await resp.json()
        setTitle(data.results)

        // else if (data.results === undefined ){
        //     console.log('no existe')
        // }else {
        //     
        // }
        
    }

    

    return(
        <div>
            <Carrusel/>
            <input type="text" value={busqueda} name="search" placeholder="search" onChange={handledInputChange} />
            <main style={{margin: '90px'}}>
                <h1 style={{color: 'white'}}>Resultados de la busqueda</h1>
               <div>
                    {
                        title
                        ? title.map(movie => (
                            <Card key={movie.id}
                                {...movie} />
                            ))

                        : <h1>No se han encontrado resultados, intenta buscar el titulo en ingles</h1>
                    }
               </div>
            </main>
        </div>
    )
}