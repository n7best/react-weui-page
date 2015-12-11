import React from 'react';
import Playground from 'component-playground';
import Cells from 'n7-react-weui/lib/cells/cells';
import SwitchCell from 'n7-react-weui/lib/cells/switch-cell';
import Page from 'n7-react-weui/lib/page';

var componentExample = require("!!raw!../examples/switchcell.example");

var descCh = {
  className: "用于添加自定义class属性",
  label:"[默认无]标题文字",
  disabled:"[默认:false]  禁用模式",
  onChange:"[默认无]当开关切换时候的函数",
  onClick:"[默认无]当开关被点击时候的函数",
  checked:"[默认:false]默认选择",
  name:"[默认无]表单name属性"
};

const SwitchCellPage = () => (
  <div className="componentDetail">
    <h1 className="comptitle">SwitchCell 开关项</h1>
    <p className="compdesc">Cell列表项延伸的自定义组件</p>
    <div className="component-documentation">
      <Playground
      docClass={SwitchCell}
      propDescriptionMap={descCh}
      codeText={componentExample}
      scope={{React: React, SwitchCell:SwitchCell, Page:Page, Cells: Cells}} />
    </div>
  </div>
);

export default SwitchCellPage;