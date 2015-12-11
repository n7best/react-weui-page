import React from 'react';
import HeaderNav from './header';
import {Row, Col, Nav, MenuItem, Navbar, NavDropdown, NavItem} from 'react-bootstrap';
import Style from './style';

const ComponentsMain = (props) => (
  <div>
    <HeaderNav/>
    <div className="container-fluid">
      <Row>
        <Col sm={2} md={2} className="sidebar componentSidebar">
          <Nav className="nav-sidebar">
            <NavItem eventKey={1} href="#/components/button">按钮 Button</NavItem>
            <NavItem eventKey={1} href="#/components/cells">列表组 Cells</NavItem>
            <NavItem eventKey={1} href="#/components/cell">列表项 Cell</NavItem>
            <NavItem eventKey={1} href="#/components/switchcell">开关项 SwitchCell</NavItem>
            <NavItem eventKey={1} href="#/components/radiocell">单选项 RadioCell</NavItem>
            <NavItem eventKey={1} href="#/components/checkboxcell">复选项 CheckboxCell</NavItem>
            <NavItem eventKey={1} href="#/components/select">选择项 SelectCell</NavItem>
            <NavItem eventKey={1} href="#/components/form">表单 Form</NavItem>
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