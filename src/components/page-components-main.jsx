import React from 'react';
import HeaderNav from './header';
import {Row, Col, Nav, MenuItem, Navbar, NavDropdown, NavItem} from 'react-bootstrap';
import Style from './style';

const ComponentsMain = (props) => (
  <div>
    <HeaderNav/>
    <div className="container-fluid">
      <Row>
        <Col sm={2} md={2} className="sidebar">
          <Nav className="nav-sidebar">
            <NavItem eventKey={1} href="#/components/button">Button</NavItem>
          </Nav>
        </Col>
        <Col sm={9} smOffset={3} md={10} mdOffset={2} className="main">
          { props.children }
        </Col>
      </Row>
    </div>
  </div>
);

export default ComponentsMain;