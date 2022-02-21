import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import {NavPrincipal} from '../components/Navbar';
import { Home } from '../components/Home';
import { Search } from '../components/Search';
import { Trailer } from '../components/Trailer';
import { AgregarMovies } from '../components/AgregarMovies';

export const DashboardRouter = () => {

  return <div >
      <NavPrincipal />
        <Routes>
            <Route path="/home" element={<Home />}/> 
            <Route path="/search" element={<Search />}/>
            <Route path="/trailer" element={<Trailer />}/> 
            <Route path="/agregarMovie" element={<AgregarMovies />}/>
            <Route path='*' element={<Navigate to= '/home' />} />
        </Routes>
    </div >
  
}