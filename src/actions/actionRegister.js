import { types }from '../types/types';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const RegistroEmailPasswordName = (nombre, email, password) =>{
    return(dispatch)=>{
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then( async ({user}) => {
            await updateProfile(auth.currentUser, {displayName: nombre})

            dispatch(RegistroSincrono(user.displayName, user.email, user.uid))
            console.log('Bienvenido')
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const RegistroSincrono = (name, email, password) => {
    return{
        type: types.register,
        payload: {
            name,
            email,
            password
        }
    }
}