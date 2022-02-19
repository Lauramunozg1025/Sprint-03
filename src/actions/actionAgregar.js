import {addDoc, collection, getDocs, deleteDoc, query, where, doc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { typesCrud } from '../types/types';

// Eliminar

export const eliminarAsincrono = (title) => {
    return async (dispatch) => {
        const esCollection = collection(db,"movies");
        const q = query(esCollection, where("title", "==", title))

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((docu) => {
            deleteDoc(doc(db, "movies", docu.id))
            .then(resp => {
                dispatch(eliminarSincrono(title))
            })
        });
    }
}

export const eliminarSincrono = (title) => {
    return {
        type: typesCrud.delete,
        payload: title
    }
}

//Action listar

export const listarAsincrono = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db,"movies")) 
        const movies = []

        querySnapshot.forEach((doc) => {
            movies.push({
                ...doc.data()
            })
        });

        dispatch(listarSincrono(movies))
    }
}

export const listarSincrono = (movies) => {
    return {
        type: typesCrud.listar,
        payload: movies
    }
}


// Action agregar

export const agregarAsincrono = (newmovie) => {
    return(dispatch) => {
        console.log('me ejecute')
        addDoc(collection(db,"movies"),newmovie) 
        .then(resp => {
            dispatch(agregarSincrono(newmovie)) 
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const agregarSincrono = (movies) => {

    return {
        type: typesCrud.agregar,
        payload: movies
    }
}