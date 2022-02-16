import React, { useState } from 'react';
import { DivCard, ContainerCard, Modal, ContentModal, Padre3D, Hijo3D, InfoPelicula, BtnVerAhora, BtnVerDespues } from '../styleds/cardsStyleds';

const Card = ({
    title,
    poster_path,
    vote_average,
    overview,
    release_date,

}) => {

    const [modal, setModal] = useState(false);

    const handleOnClick = (estado) => {
        setModal(estado)
    }


    return(
        <>
            <DivCard>
                <ContainerCard onClick={() =>handleOnClick(true)}>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt={title}/>
                        <span>
                            <svg width="26" height="26" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            {vote_average}
                        </span>
                    </div>
                </ContainerCard>   
            </DivCard>

                { modal &&
                    <Modal >
                        <ContentModal>

                            <header onClick={() =>handleOnClick(false)}>
                                <label for="open-moda">x</label>
                            </header>

                            <div className="contentModal" style={{display: 'flex'}}>
                                <Padre3D>
                                    <Hijo3D>
                                        <ContainerCard >
                                            <div>
                                                <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt={title}/>
                                                <span>
                                                    <svg width="26" height="26" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                    </svg>
                                                    {vote_average}
                                                </span>
                                            </div>
                                        </ContainerCard> 
                                    </Hijo3D>
                                </Padre3D>

                                <InfoPelicula>
                                    <h1> {title} </h1> 
                                    <p> {overview} </p>

                                    <ul>
                                        <li style={{listStyle: 'none'}}> {release_date} </li>
                                        <li> genero </li>
                                        <li> duracion </li>
                                    </ul>

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

                                </InfoPelicula>
                            </div>
                        </ContentModal>
                    </Modal>
                }
             
        </ >
    )
}

export default Card;