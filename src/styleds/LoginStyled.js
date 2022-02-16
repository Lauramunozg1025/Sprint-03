import styled from 'styled-components';

export const Fondo = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: rgba(0,0,0, 0.86);
    transition: all 500ms ease;
`

export const Container = styled.div `
    width: 450px ;
    height: 450px;
    margin: auto ;
    background: #0F0E17 ;
    text-align:center;
    border-radius:10px;

    & h3 {
        color: white;
        margin: 10px; 
        padding: 20px;
    }

    & form button {
        margin-top: 30px;
        width: 70%;
        height: 38px;
        border: 1px solid #FED941;
        border-radius: 8px;
        background: black;
        color: white;
    }

    & form p {
        padding: 20px;
        color: gray;
    }
`

export const DivForm = styled.div `
    border-bottom: 1px solid gray;
    width: 60%;
    height: 45px;
    margin: auto;

    &  input {
        border: 0;
        background: none;
        color: white;
        margin: 15px;
        outline: none;
    }
`

export const ContentRedes = styled.div `
    display: flex;
    justify-content: center;

    & div {
        width: 125px;
        border-radius: 5px;
        margin:10px;
        cursor: pointer;
    }
`