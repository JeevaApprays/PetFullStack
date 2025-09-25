import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
 
    return (
        <Navbar  expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Container>
        </Navbar>
      );


}

export default Header