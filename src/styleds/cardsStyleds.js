import styled from 'styled-components';

export const DivCard = styled.div `
    display: inline-flex;
    flex-wrap: wrap;
`

export const ContainerCard = styled.div `
    margin: 20px;
    width: 220px;
    height: 330px;
    min-height: 330px;
    cursor: pointer;

    & div {
        position: relative;
    }

    & img {
        position: absolute;
        width: 220px;
        height: 330px;
        min-height: 330px;
    }

    & span {
        background: RGBA(0,0,0,0.76);
        border: 1px solid #FED941;
        border-radius: 0 15px 15px 0 ;
        margin: 15px 0;
        width: 100px;
        height: 50px;
        padding: 0 10px;
        position: absolute;
        color: white;
        font-size: 26px;
    }

`

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background: rgba(0,0,0, 0.86);
    transition: all 500ms ease;
    overflow: hidden;

`
export const ContentModal = styled.div`
    width: 80%;
    height: 500px;
    margin: auto;
    position: relative;
    transition: all 500ms ease;

    & header {
        background: rgba(0,0,0, 0.5);
        border-radius: 100%;
        position: absolute;
        width: 50px;
        height: 50px;
        top: -100px;
        right: 200px;
        color: white;
    }

    & header label {
        font-size: 28px;
        cursor: pointer; 
        padding: 2px 15px;
    }
`

export const Padre3D = styled.div`
    perspective: 500px;
`

export const Hijo3D = styled.div`
    transform: rotateX(40deg) rotateZ(-50deg) translateZ(100px);
`

export const InfoPelicula = styled.div `
    margin: 0 20%;
    width: 800px;
    flex-wrap: wrap;

    & h1 {
        color: white;
    }

    & p {
        color: white;
    }

    & ul {
        display: flex;
        color: lightgray;
    }

    & ul li {
        margin: 20px;
    }

    & button {
        width: 274.98px;
        height: 48px;
        font-size: 18px;
        margin: 16px;
        border-radius: 10px;
        font-weight: bold;
    }
`

export const BtnVerAhora = styled.button`
    background-color: #FED941;
    border: none;
    color: black;

`

export const BtnVerDespues = styled.button`
    background-color: transparent;
    border: 1px solid #FED941;
    color: #FED941;

`