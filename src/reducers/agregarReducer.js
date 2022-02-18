import { typesCrud } from '../types/types'

const initializeApp = {
    movies: []
}

export const agregarReducer = (state = initializeApp, action) => {
    switch(action.type) {
        case typesCrud.agregar: 
            return {
                movies: [action.payload]
            }

        case typesCrud.listar: 
        return {
            movies: [...action.payload]
        }

        case typesCrud.delete: 
        return {
            movies: state.movies.filter(est => est.title !== action.payload)
        }

        default:
            return state;
    }
}