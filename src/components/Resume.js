import React from 'react'
import styled from 'styled-components'


function Resume({ scrollHander }) {



    return (
        <ResumePage id="resume" onMouseEnter={() => scrollHander("resume")}       >

            <iframe
                title='resume'
                style={{

                    width: "720px",
                    height: "110%",
                    overflow: "hidden",
                    left: " 50 %",
                    transform: "translate(0,-50 %)",
                    minHeight: "900px",
                    border: 'beige',
                    justifySelf: "center"
                }}
                src="https://docs.google.com/document/d/e/2PACX-1vTfUAaHUPtMA1Q490Y5Y1gPtNpMXHZiuRezuzAS155Z4b1Co3ycxb7GNeqkdlRY3sch4hpMen5ORLPF/pub?embedded=true"></iframe>

        </ResumePage >
    )
}

export default Resume

const ResumePage = styled.div`
* {box-sizing:border-box}

background-color: whitesmoke;
  display: grid;

  grid-template-columns: 100vw;
overflow: hidden;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   font-family: 'Montserrat', sans-serif;
/* iframe{

justify-self: center;


} */

`