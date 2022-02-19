import React from 'react';
import { useForm }from '../hooks/useForm';
import { Link } from 'react-router-dom';
import { Fondo, Container, DivForm } from '../styleds/LoginStyled';
import { useDispatch } from 'react-redux';
import { RegistroEmailPasswordName } from '../actions/actionRegister';

const Registro = () => {

    const dispatch = useDispatch()

    const [formValues, handledInputChange] = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    })

    const { name, email, password1, password2} = formValues

    const handleRegistro = (e) =>{
        e.preventDefault()
        dispatch(RegistroEmailPasswordName(name, email, password1))
    }

  return (
    <Fondo>
        <Container>
            <h3>Sign up</h3>
            <form onSubmit={handleRegistro}>
                <DivForm>
                    <svg width="18" height="18" fill="white" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>
                    <input type="text" placeholder="name" name="name" value={name} onChange={handledInputChange}/>
                </DivForm>

                <DivForm>
                    <svg width="18" height="18" fill="white" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                    <input type="email"  placeholder="example@example.com" name="email" value={email} onChange={handledInputChange}  />
                </DivForm>

                <DivForm>
                    <svg width="18" height="18" fill="white" className="bi bi-lock" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                    </svg>
                    <input type="password"  placeholder="Password"  name="password1" value={password1} onChange={handledInputChange} />
                </DivForm>

                <DivForm>
                    <svg width="18" height="18" fill="white" className="bi bi-lock" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                    </svg>
                    <input type="password"  placeholder="Confirm password"  name="password2" value={password2} onChange={handledInputChange} />
                </DivForm>

                <button> Sign up </button> <br/> <br/>
                <p><Link to="/login" style={{color:'RGBA(254,217,65,0.63)'}}> Sign in ?</Link></p>
            </form>
        </Container>
    </Fondo>
  )
}

export default Registro