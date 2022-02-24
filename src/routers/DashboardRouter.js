import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import {NavPrincipal} from '../components/Navbar';
import { Home } from '../components/Home';
import { Search } from '../components/Search';
import { AgregarMovies } from '../components/AgregarMovies';
import { MasValoradas } from '../components/MasValoradas';
import { MenosValoradas } from '../components/MenosValoradas';

export const DashboardRouter = () => {

  return <div >
      <NavPrincipal />
        <Routes>
            <Route path="/home" element={<Home />}/> 
            <Route path="/search" element={<Search />}/>
            <Route path="/agregarMovie" element={<AgregarMovies />}/>
            <Route path="/mas-valoradas" element={<MasValoradas />}/>
            <Route path="/menos-valoradas" element={<MenosValoradas />}/>
            <Route path='*' element={<Navigate to= '/home' />} />
        </Routes>
    </div >
  
}