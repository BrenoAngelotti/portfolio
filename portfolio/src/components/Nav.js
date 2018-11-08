import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './../index.css';

export class Nav extends Component{
  constructor(props) {
    super(props);
    this.state = {
        collapse: false,
        isWideEnough: false,
    };
this.onClick = this.onClick.bind(this);
}

onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
}  
  
  render(){
      return (
        <Router>
          <Navbar dark expand="lg" style={{backgroundColor: '#2E2E2E', position: 'fixed', width: "100%", zIndex: '99'  }}>
            <NavbarBrand href="#">
                <strong>{ this.props.data.name }</strong>
            </NavbarBrand>
              { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
            <Collapse isOpen = { this.state.collapse } navbar>
                <NavbarNav>
                  <NavItem>
                        <a className="nav-link" href="#Bio">Home</a>               
                  </NavItem>
                  <NavItem>
                      <a className="nav-link" href="#Skills">Habilidades</a>
                  </NavItem>
                  <NavItem>
                      <a className="nav-link" href="#Blog">Blog</a>
                  </NavItem>
                  <NavItem>
                      <a className="nav-link" href="#Portfolio">Portfólio</a>
                  </NavItem>
                  <NavItem>
                      <a className="nav-link" href="#Info">Mais</a>
                  </NavItem>
                  <NavItem>
                      <a className="nav-link" href="#Form">Contato</a>
                  </NavItem>
                </NavbarNav>
            </Collapse>
          </Navbar>
        </Router>
      );
    }
  }