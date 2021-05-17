import React, { Component } from 'react';
// reactstrap components
import {
    NavbarBrand,
    Navbar
  } from "reactstrap";

class Header extends Component {
    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "#172b4d",
            padding: "15px",
            fontFamily: "Arial",
            textAlign:"center"
          };
        return (
                <Navbar style={mystyle}  expand="lg">
                    <NavbarBrand>
                       Online Book Store
                    </NavbarBrand>
                </Navbar>
        );
    }
}

export default Header;