import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { LoginEmailPassword } from "../actions/actionLogin";
import {useDispatch} from 'react-redux';
import { DashboardRouter } from './DashboardRouter'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import Login from '../components/Login'
import Registro from '../components/Registro';
import { NavbarPublic } from '../components/Navbar'

const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [login, setLogin] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(LoginEmailPassword(user.uid,user.displayName));
        console.log(user)
        setLogin(true)

      }else {
        setLogin(false)

      }
      setChecking(false)
    })
    // setChecking(true)
  },[dispatch, setChecking ,setLogin ])

  if(checking) {
    <h1>Cargando...</h1>
    
  }else {
    setChecking(true)
  }

  return (
        <Routes>
            <Route path="/login" element={<PublicRoutes isAutenticated ={login}>
            <NavbarPublic />
              <Login/>
            </PublicRoutes>}/> 

            <Route path="/registrarse" element={<PublicRoutes isAutenticated ={login}>
            <NavbarPublic />
              <Registro />
            </PublicRoutes>}/> 

             <Route path="/*" element={<PrivateRoutes isAutenticated ={login}>
               <DashboardRouter/>
             </PrivateRoutes>}/>
        </Routes>
  )
}

export default AppRouter