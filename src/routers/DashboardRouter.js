import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {NavPrincipal} from '../components/Navbar';
import { Home } from '../components/Home';
import { AgregarMovies } from '../components/AgregarMovies';

export const DashboardRouter = () => {

  return <BrowserRouter >
      <NavPrincipal />
        <Routes>
            <Route path="/home" element={<Home />}/> 
            <Route path="/agregarMovie" element={<AgregarMovies />}/>
            <Route path='*' element={<Navigate to= '/home' />} />
        </Routes>
    </BrowserRouter >
  
}