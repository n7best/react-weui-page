import React from 'react';
import Playground from 'component-playground';
import Cells from 'n7-react-weui/lib/cells/cells';
import Cell from 'n7-react-weui/lib/cells/cell';
import CellHeader from 'n7-react-weui/lib/cells/cell-header';
import CellBody from 'n7-react-weui/lib/cells/cell-body';
import CellFooter from 'n7-react-weui/lib/cells/cell-footer';
import Page from 'n7-react-weui/lib/page';

var componentExample = require("!!raw!../examples/cell.example");

var descCh = {
  className: "用于添加自定义class属性",
  link:"[默认无]列表链接",
  select:"[默认:false]如果cellBody为选项时用到",
  selectBefore:"[默认:false]如果cellHeader为选项时用到",
  selectAfter:"[默认:false]如果cellFooter为选项时用到"
};


let iconStyle = {
  width: '20px',
  marginRight: '5px',
  display: 'block'
};

let icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=";

const Icon = () => <img style={iconStyle} src={icon}  />;

const CellPage = () => (
  <div className="componentDetail">
    <h1 className="comptitle">Cell 列表项</h1>
    <p className="compdesc">Cell提供CellHeader,CellBody,CellFooter三个模块以方便于创建自定义组建</p>
    <div className="component-documentation">
      <Playground
      docClass={Cell}
      propDescriptionMap={descCh}
      codeText={componentExample}
      scope={{React: React, Icon:Icon, Page:Page, Cells: Cells, Cell: Cell, CellHeader:CellHeader,CellBody:CellBody,CellFooter:CellFooter}} />
    </div>
  </div>
);

export default CellPage;