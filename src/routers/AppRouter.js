import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../components/Home'
import { NavbarPublic } from '../components/Navbar'
import Login from '../components/Login'
import Registro from '../components/Registro';

export const AppRouter = () => {
    return (
        <BrowserRouter>
                    <NavbarPublic />
                    <Routes> 
                        <Route exact path="/home" element={<Home />} />
                        <Route exact path="/" element={<Login/>} />
                        <Route exact path="/registrarse" element={<Registro/>} />
                        <Route exact path="*" element={<Navigate to="/home"/>} />
                    </Routes>
        </BrowserRouter>
    )
}