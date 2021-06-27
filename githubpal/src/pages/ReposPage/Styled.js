import styled from "styled-components"

export const Main = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`

export const List = styled.div`
    display:grid;
    width:100%;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows:1fr;
    
`

export const SmallHeader = styled.div`
    display:flex;
    align-items:center;
    flex-direction:row;
    width:100%;
    justify-content:space-between;
    border-bottom:1px solid gray;
    p{
        margin-left:8px;
        font-size:16px;
    }
    button{
        display:flex;
        align-items:center;
        font-family:'Roboto', 'sans-serif';
        font-size:16px;
        letter-spacing:0.8px;
        outline:none;
        border:none;
        background-color:#2EA44F;
        padding:8px;
        border-radius:8px;
        color:white;
        margin-right:8px;
        :hover{
            cursor: pointer;
            opacity:80%;
            color:black;
        }
        :active{
            opacity:100%;
            background-color:#0366DE;
        }
    }
`