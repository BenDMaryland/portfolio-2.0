import React,{useState} from 'react'

// import { NavLink, Route, Routes } from "react-router-dom";
import styled from 'styled-components';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Footer from './Footer';
import TopBar from "./TopBar"
import Intro

    from './Intro';
import { func } from 'prop-types';
function Home() {
const [wheelLocation, setwheelLocation] = useState("intro")
    function scrollHander(loc){
        setwheelLocation(loc)
      
    }


// window.addEventListener("scroll",scrollInfo )r


    return (
        <Portfol onScroll={() => console.log("hi")}  >
            <TopBar wheelLocation={wheelLocation} scrollHander={scrollHander} />
            <Intro scrollHander={scrollHander}  />
            <Portfolio scrollHander={scrollHander}  />
            <Resume  scrollHander={scrollHander}  />
            <Footer scrollHander={scrollHander}    />
        </Portfol>


    )
}

export default Home

const Portfol = styled.div`

   font-family: 'Montserrat', sans-serif, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #eaecec;
    font-weight: bolder




 `