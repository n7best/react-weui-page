import React from 'react';
import ReactDOM from 'react-dom';
import {Nav, MenuItem, Navbar, NavDropdown, NavItem} from 'react-bootstrap';
import { Link } from 'react-router';
const HeaderNav = () =>(
  <Navbar inverse fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">React-WeUI</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#/install">Installation</NavItem>
        <NavItem eventKey={1} href="#/components">Components</NavItem>
        <NavItem eventKey={2} href="https://github.com/n7best/react-weui">Github</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default HeaderNav;