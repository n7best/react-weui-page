import React from 'react';
import Playground from 'component-playground';
import Cells from 'n7-react-weui/lib/cells/cells';
import CheckboxCell from 'n7-react-weui/lib/cells/checkbox-cell';
import Page from 'n7-react-weui/lib/page';

var componentExample = require("!!raw!../examples/checkboxcell.example");

var descCh = {
  className: "用于添加自定义class属性",
  label:"[默认无]标题文字",
  title:"[默认无]列表组标题",
  value:"[默认无]选择内容",
  name:"[默认无]表单name属性",
  access:"[默认:false]  列表组access模式",
  disabled:"[默认:false] 禁用模式",
  onChange:"[默认:false] 当选项切换时候的函数",
  onClick:"[默认:false] 当选项被点击时候的函数",
  checked:"[默认:false] 默认选择"
};

const CheckboxCellPage = () => (
  <div className="componentDetail">
    <h1 className="comptitle">CheclboxCell 复选项</h1>
    <p className="compdesc">Cells列表组和Cell列表项延伸的自定义组件</p>
    <div className="component-documentation">
      <Playground
      docClass={CheckboxCell}
      propDescriptionMap={descCh}
      codeText={componentExample}
      scope={{React: React, Page:Page, Cells: Cells, CheckboxCell:CheckboxCell}} />
    </div>
  </div>
);

export default CheckboxCellPage;