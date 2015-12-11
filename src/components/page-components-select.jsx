import React from 'react';
import Playground from 'component-playground';
import Cells from 'n7-react-weui/lib/cells/cells';
import Cell from 'n7-react-weui/lib/cells/cell';
import InputCell from 'n7-react-weui/lib/cells/input-cell';
import Select from 'n7-react-weui/lib/cells/input-select';
import Page from 'n7-react-weui/lib/page';
import CellHeader from 'n7-react-weui/lib/cells/cell-header';
import CellBody from 'n7-react-weui/lib/cells/cell-body';
import CellFooter from 'n7-react-weui/lib/cells/cell-footer';

var componentExample = require("!!raw!../examples/select.example");

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
  checked:"[默认:false] 默认选择",
  data:"[默认:空array] 选择数据"
};

var selectdata = [
  {value:"1", label:"选择1"},
  {value:"2", label:"选择2"},
  {value:"3", label:"选择3"},
  {value:"4", label:"选择4"}
];

const SelectPage = () => (
  <div className="componentDetail">
    <h1 className="comptitle">Select 选择项</h1>
    <p className="compdesc">Cell列表项延伸的自定义组件</p>
    <div className="component-documentation">
      <Playground
      docClass={Select}
      propDescriptionMap={descCh}
      codeText={componentExample}
      scope={{React: React, Page:Page, Cells: Cells, Cell:Cell,
            CellHeader:CellHeader,CellBody:CellBody,CellFooter:CellFooter,
            InputCell:InputCell, Select:Select, selectdata:selectdata}} />
    </div>
  </div>
);

export default SelectPage;