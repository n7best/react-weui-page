import React from 'react';
import ReactDOM from 'react-dom';
import {Nav, MenuItem, Navbar, NavDropdown, NavItem} from 'react-bootstrap';
import { Link } from 'react-router';

var lang = {
  ch:{
    'home':'主页',
    'installation':'开始使用',
    'components':'基础组件',
    'preview':'预览'
  },
  en:{
    'installation':'Installation',
    'components':'Components',
  }
};

var currentlang = 'ch';

const HeaderNav = () =>(
  <Navbar inverse fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="http://n7best.github.io/react-weui-page/">React-WeUI</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">{lang[currentlang].home}</NavItem>
        <NavItem eventKey={2} href="#/install">{lang[currentlang].installation}</NavItem>
        <NavItem eventKey={3} href="#/components">{lang[currentlang].components}</NavItem>
        <NavItem eventKey={4} href="http://n7best.github.io/react-weui/">{lang[currentlang].preview}</NavItem>
        <NavItem eventKey={5} href="https://github.com/n7best/react-weui">Github</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default HeaderNav;