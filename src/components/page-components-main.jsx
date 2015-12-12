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
            <NavItem eventKey={2} href="#/components/cells">列表组 Cells</NavItem>
            <NavItem eventKey={3} href="#/components/cell">列表项 Cell</NavItem>
            <NavItem eventKey={4} href="#/components/switchcell">开关项 SwitchCell</NavItem>
            <NavItem eventKey={5} href="#/components/radiocell">单选项 RadioCell</NavItem>
            <NavItem eventKey={6} href="#/components/checkboxcell">复选项 CheckboxCell</NavItem>
            <NavItem eventKey={7} href="#/components/select">选择项 SelectCell</NavItem>
            <NavItem eventKey={8} href="#/components/form">表单 Form</NavItem>
            <NavItem eventKey={9} href="#/components/toast">提示 Toast</NavItem>
            <NavItem eventKey={10} href="#/components/dialog">对话框 Dialog</NavItem>
            <NavItem eventKey={11} href="#/components/progress">进度条 Progress</NavItem>
            <NavItem eventKey={12} href="#/components/msgpage">结果页 MsgPage</NavItem>
            <NavItem eventKey={13} href="#/components/article">文字视图 Article</NavItem>
            <NavItem eventKey={14} href="#/components/actionsheet">动作 Actionsheet</NavItem>
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