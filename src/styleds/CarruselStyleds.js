import styled from 'styled-components';

export const ContainerSlider = styled.header `
    width: 100%;
    margin: auto;
    overflow: hidden;
`

export const ListaSlider = styled.ul `
    display: flex;
    animation: cambio 30s infinite;

    & li {
        width: 100%;
        list-style: none;
        position: relative;
    }

    & li img {
        width: 1500px;
        margin: 16px;
        object-fit: cover;
    }

    @keyframes cambio {
        0% {margin-left: 0;}
        20% {margin-left: 0;}
        25% {margin-left: -75%;}
        45% {margin-left: -75%;}
        50% {margin-left: -160%;}
        70% {margin-left: -160%;}
        75% {margin-left: -75%;}
        95% {margin-left: -75%;}
        100% {margin-left: 0;}
    } 

`

export const MenuSlider = styled.ul `
    list-style: none;
    text-align: center;
    

    & li {
        display: inline-block;
        text-align: center;
    }

    & li a {
        display: inline-block;
        background: #A7A9BE;
        border-radius: 100%;
        font-size: 4px;
        color: transparent;
        margin: 16px;
        width: 12px;
        height: 12px;
    }

`
export const BtnVerAhora = styled.button`
    width: 274.98px;
    height: 48px;
    font-size: 18px;
    margin: 16px;
    border-radius: 10px;
    font-weight: bold;
    background-color: #FED941;
    border: none;
    color: black;
    position: absolute;
    z-index: 1;
    left: 10px;
    top: 310px;
`

export const BtnVerDespues = styled.button`
    width: 274.98px;
    height: 48px;
    font-size: 18px;
    margin: 16px;
    border-radius: 10px;
    font-weight: bold;
    background-color: rgb(0, 0, 0, 0.70);
    border: 1px solid #FED941;
    color: #FED941;
    position: absolute;
    z-index: 1; 
    left: 300px;
    top: 310px;
`
