import React, { useState, useEffect } from 'react';
import Card from './Cards';
import { API_URL } from '../helpers/url'
import { Link } from 'react-router-dom'
import {  Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap'
import { ContainerSlider, ListaSlider, MenuSlider, BtnVerAhora, BtnVerDespues } from '../styleds/CarruselStyled';

export const NavPrincipal = () => {
  return (
    <div>
        <Navbar expand="lg" variant="dark" >
          <Container fluid>
            <Navbar.Brand > <img src='https://res.cloudinary.com/dvtpbvs4w/image/upload/v1644772455/Sprint-03/logo-blockBuster_kx66gu.png' alt="logo"/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                <Nav.Link href="#action1">Todas</Nav.Link>
                <Nav.Link href="#action2">Mas valoradas</Nav.Link>
                <Nav.Link href="#action3">Menos valoradas</Nav.Link>
              </Nav>

              <Form className="d-flex">
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

        <header>
                <ContainerSlider>
                    <ListaSlider>
                        <li id="slide1">
                            <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1644784619/Sprint-03/mulan_xewrr5.png" alt="Mulan"/>
                            <BtnVerAhora>
                              <svg width="20" height="20" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                              </svg> VER AHORA
                          </BtnVerAhora>
                          <BtnVerDespues>
                              <svg width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                              </svg> VER DESPUES
                          </BtnVerDespues>
                        </li>

                        <li id="slide2">
                          <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1644784619/Sprint-03/raya_lngs8n.png" alt="Raya"/>
                          <BtnVerAhora>
                                <svg width="20" height="20" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                </svg> VER AHORA
                            </BtnVerAhora>
                            <BtnVerDespues>
                                <svg width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                </svg> VER DESPUES
                            </BtnVerDespues>
                        </li>

                        <li id="slide3">
                          <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1644784620/Sprint-03/unidos_qzn2xw.png" alt="Unidos"/>
                          <BtnVerAhora>
                                <svg width="20" height="20" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                </svg> VER AHORA
                            </BtnVerAhora>
                            <BtnVerDespues>
                                <svg width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                </svg> VER DESPUES
                            </BtnVerDespues>
                        </li>
                    </ListaSlider>

                </ContainerSlider>

                <MenuSlider>
                    <li>
                        <a href="#slide1">1</a>
                    </li>

                    <li>
                    <a href="#slide2">2</a>
                    </li>

                    <li>
                    <a href="#slide3">3</a>
                    </li>
                </MenuSlider>
        </header>
    </div>
  )
}

export const NavbarPublic = () => {

  const [movies, setMovies] = useState()

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