import React from 'react'
import { ContainerSlider, ListaSlider, MenuSlider, BtnVerAhora, BtnVerDespues } from '../styleds/CarruselStyleds';

const Carrusel = () => {
  return (
    <div>
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

export default Carrusel