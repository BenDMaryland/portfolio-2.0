import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Home"
import styled from 'styled-components';
import "./global.css"



function App() {
  return (
    <MainBody   >

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Home />} />
        </Routes>
      </BrowserRouter>
    </MainBody>
  )
}

export default App
const MainBody = styled.div`

 width: 100%;

body{
    background-image: url(../javascript/assets/images/overlay.png);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #f5fafa;
    margin: 0px;
      paddding: 0;
  margin: 0;
}


 a{
text-align: center;
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block; }

    main{
    text-align: center;
     width: 90%;
     right:90%;
    background-color: #f5fafa;
}
`