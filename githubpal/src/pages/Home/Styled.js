import styled from 'styled-components'

export const Main = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`

export const Form = styled.div`
    margin:8px;
    display:flex;
    align-items:center;
    input{
        margin-left:8px;
        height:32px;
        border:none;
        border-bottom:1px solid black;
        outline:none;
        font-family:'Roboto', 'sans-serif';
        font-size:16px;
    }
    button{
        outline:none;
        background-color:transparent;
        border:none;
        :hover{
            cursor: pointer;
            transform: scale(1.1);
        }
    }
`
export const Card = styled.div`
    display:flex;
    flex-direction:column;
    border:1px solid black;
    border-radius:16px;
    padding:4px;
    img{
        border-radius:16px;
        height:240px;
    }
    h3,p{
        text-align:center;
    }
    
`
export const Buttons = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    button{
        margin:4px;
        outline:none;
        border-radius:16px;
        background-color:#2EA44F;
        border:none;
        color:white;
        font-family:'Roboto', 'sans-serif';
        letter-spacing:2px;
        :hover{
            cursor: pointer;
            transform:scale(1.1);
        }
    }
`