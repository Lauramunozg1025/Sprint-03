import React, { useState, useEffect } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
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


  const [login, setLogin] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(LoginEmailPassword(user.uid,user.displayName));
        setLogin(true)

      }else {
        setLogin(false)

      }
    })
  },[setLogin ])


  return (
      <BrowserRouter >
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
      </BrowserRouter>
  )
}

export default AppRouter