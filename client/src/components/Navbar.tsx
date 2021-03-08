import React, {Fragment} from 'react'
import styled, {css} from 'styled-components'






export const Navbar = () => {
    return (
       <Fragment>
           <Nav>
               <Container>
                   <InnerContainer>
                       <div className="row">
                           <div className="col-xl-3">
                                <Logo src="/resources/Logo.PNG"/>
                           </div>
                           <div className="col-xl-6">
                              
                           </div>
                           <div className="col-xl-3 text-right">
                                <Button >Login | Register</Button>
                           </div>
                       </div>              
                   </InnerContainer>              
               </Container>
           </Nav>            
       </Fragment>
    )
}

const Nav = styled.div`
height: 80px;
background-color: white;

`

const Logo = styled.img `
width: 5vw;
`

const InnerContainer = styled.div `
padding-top: 10px;
`


const Container = styled.div`
  width: 90%;
  margin: auto;
`
const Paragraph = styled.p`
font-family: 'Poppins', sans-serif !important;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #E0E0E0;
  color: palevioletred;
  font-size: 18px;
  font-weight: 700;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

`;