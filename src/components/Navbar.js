import React, { useState, useEffect } from 'react';
import Card from './Cards';
import { API_URL } from '../helpers/url'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {  Navbar, Nav,  Container, Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { LogOut } from '../actions/actionLogin';

export const NavPrincipal = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () =>{
    dispatch(LogOut())
    navigate('/login')
  }

  return (
    <div>
        <Navbar expand="lg" variant="dark" >
          <Container fluid>
            <Link to='/home'><Navbar.Brand > <img src='https://res.cloudinary.com/dvtpbvs4w/image/upload/v1644772455/Sprint-03/logo-blockBuster_kx66gu.png' alt="logo"/> </Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                <NavLink to="/home" style={{color:'gray', textDecoration:'none', marginRight:'15px'}}>Todas</NavLink>
                <NavLink to="/mas-valoradas" style={{color:'gray', textDecoration:'none', marginRight:'15px' }}>Mas valoradas</NavLink>
                <NavLink to="/menos-valoradas" style={{color:'gray', textDecoration:'none', marginRight:'15px' }}>Menos valoradas</NavLink>
                <NavLink to="/agregarMovie" style={{color:'gray', textDecoration:'none', marginRight:'15px' }}>Agregar Movie </NavLink>
              </Nav>
              
              <Form className="d-flex">
              <Button onClick={handleLogOut}>Logout</Button>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search" 
                  style={{width: '533px'}}
                  />
                <Button variant=" btn-warning">
                  <svg  width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
              </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export const NavbarPublic = () => {

  const [movies, setMovies] = useState();

  useEffect(() => {
      getMovies()
  }, [])

  const getMovies = async () => {
      const resp = await fetch(API_URL)
      const data = await resp.json()
      const results = data.results;
      setMovies(results)
  }

  return(
    <div>
     <Navbar expand="lg" variant="dark" style={{zIndex:'5'}}>
      <Container>
      <Navbar.Brand> <img src='https://res.cloudinary.com/dvtpbvs4w/image/upload/v1644772455/Sprint-03/logo-blockBuster_kx66gu.png' alt="logo"/> </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Link to="/" style={{textDecoration: 'none', margin:'20px'}}>
          <Navbar.Text style={{color: '#FED941'}}>
              Sign in
            </Navbar.Text>
        </Link> <br/><br/><br/>

        <Link to="/registrarse" style={{textDecoration: 'none'}}>
        <Navbar.Text style={{color: '#FED941'}}>
            Sign up
          </Navbar.Text>
        </Link>

        </Navbar.Collapse>

       
      </Container>
    </Navbar>

    <div styled={{position: 'relative'}}>
      <main style={{margin: '90px'}}>
          <h1 style={{color: 'white'}}>Peliculas</h1>
          <div>
              {
                  movies?.map(movie => (
                      <Card key={movie.id}
                          {...movie} />
                  ))
              }
          </div>
      </main>
    </div>
  </div>
  )
}