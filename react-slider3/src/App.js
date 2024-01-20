import "./App.css";
import React from 'react';
import Carousel from './Components/Carousel';
import styled from "styled-components";

function App() {
  return (
    <div className='carousel'>
        <Carousel/>
    </div>
  )
}

const Container = styled.div`
height:100vh;
width:100%;
background-color:#bdc3c7;
`


const Button = styled.button`
border-radius: 50px;
padding:5px;
min-width:120px;
color:white;
font-weight: 600;
cursor: pointer;
&:active,
&:focus {
  outline:none;
}
background-color: ${props => props.danger ? "#e74c3c" : "#2ecc71"};
`;
export default App