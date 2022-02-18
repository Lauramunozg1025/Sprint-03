import React, { useState, useEffect } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { LoginEmailPassword } from "../actions/actionLogin";
// import {useDispatch} from 'react-redux';
// import { DashboardRouter } from './DashboardRouter'
// import { PublicRoutes } from './PublicRoutes'
// import { PrivateRoutes } from './PrivateRoutes'
import Login from '../components/Login'
import Registro from '../components/Registro';
import { Home } from '../components/Home';
import { AgregarMovies } from '../components/AgregarMovies';
import {NavPrincipal} from '../components/Navbar';

const AppRouter = () => {

  // const dispatch = useDispatch();

  // const [checking, setChecking] = useState(true);
  // const [login, setLogin] = useState(false)

  // useEffect(() => {
  //   const auth = getAuth()
  //   onAuthStateChanged(auth, (user) => {
  //     if (user?.uid) {
  //       dispatch(LoginEmailPassword(user.uid,user.displayName));
  //       setLogin(true)
  //     }else {
  //       setLogin(false)
  //     }
  //     setChecking(false)
  //   })
  //   setChecking(true)
  // },[setChecking ,setLogin ])

  // if(checking) {
  //   <h1>Cargando...</h1>
  // }else {
  //   setChecking(true)
  // }

  return (
      // <BrowserRouter >
      //   <Routes>
      //       <Route path="/login" element={<PublicRoutes isAutenticated ={login}>
      //         <Login/>
      //       </PublicRoutes>}/> 

      //       <Route path="/registrarse" element={<PublicRoutes isAutenticated ={login}>
      //         <Registro />
      //       </PublicRoutes>}/> 

      //        <Route path="/" element={<PrivateRoutes isAutenticated ={Login}>
      //          <DashboardRouter/>
      //        </PrivateRoutes>}/>
      //   </Routes>
      // </BrowserRouter>

<BrowserRouter>
<NavPrincipal />
<Routes>
    <Route path="/login" element={<Login />}/> 
    <Route path="/registrarse" element={<Registro />}/> 
    <Route path="/home" element={<Home />}/> 
     <Route path="/agregarMovie" element={<AgregarMovies />}/>
     {/* <Route path="/" element={<DashboardRouter />}/> */}
</Routes>
</BrowserRouter>
  );
}

export default AppRouter