import React from 'react'
import { useForm }from '../hooks/useForm'
import { Link, useNavigate } from 'react-router-dom'
import { Fondo, Container, ContentRedes, DivForm } from '../styleds/LoginStyled'
import { useDispatch } from 'react-redux'
import { LoginEmailPassword, LoginGoogle, LoginFacebook } from '../actions/actionLogin'
// import { NavbarPublic } from './Navbar'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ values, handleInputChange ] = useForm({
        email: '',
        password: ''
    })

    const {email,password} = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(LoginEmailPassword(email, password))
        navigate('/')
    }

    const handleGoogle = () =>{
        dispatch(LoginGoogle())
        navigate('/')
    }

    const handleFacebook = () =>{
        dispatch(LoginFacebook())
        navigate('/')
    }

    

  return (
    <Fondo>
        {/* <NavbarPublic /> */}
        <Container>
            <h3>Sign In With</h3>

            <form onSubmit={handleLogin}>
                <ContentRedes>
                    <div style={{background: ' #005bb8', color:'white'}} onClick={handleFacebook}>
                        <img src="https://img.icons8.com/fluency/35/000000/facebook.png" alt="login con Facebook"/>
                        Facebook
                    </div>
                    <div style={{background:'white'}} onClick={handleGoogle}>
                        <img src="https://img.icons8.com/fluency/30/000000/google-logo.png" alt="login con Google"/>
                        Google
                    </div>
                </ContentRedes>
                
                <DivForm>
                    <svg width="18" height="18" fill="white" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                    <input type="email" placeholder="Enter email" name="email" value={email} onChange={handleInputChange} /> 
                </DivForm>

                <DivForm>
                    <svg width="18" height="18" fill="white" className="bi bi-lock" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                    </svg>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                </DivForm>

                <button> Sign in </button>
                <p>Not a member?  <Link to="/registrarse" style={{color:'RGBA(254,217,65,0.63)'}}> Sign up now</Link></p>
            </form>
        </Container>
    </Fondo>
  )
}

export default Login