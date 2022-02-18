import styled from 'styled-components';

export const Tr = styled.tr `
    color: RGBA(245,245,245,0.85);
    font-size: 18px;
`

export const TrBody = styled.tr `
    color: lightgray;
    font-size: 18px;

    & td div {
        width: 120px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
        
    }

    & button {
        background-color: rgb(0, 0, 0, 0.70);
        margin-bottom: 10px;
        border-radius: 7px;
        border: 1px solid gray;
        color: lightgray;
        width: 120px;
        height: 35px;
    }

    & img {
        width: 80px;
        height: 100px;
        object-fit: cover;
    }
`

// export const TdDescripcion = styled.td `
//     width: 10px;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     overflow: hidden;
// `