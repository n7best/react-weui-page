import React from 'react';
import Playground from 'component-playground';
import Cells from 'n7-react-weui/lib/cells/cells';
import Cell from 'n7-react-weui/lib/cells/cell';
import CellHeader from 'n7-react-weui/lib/cells/cell-header';
import CellBody from 'n7-react-weui/lib/cells/cell-body';
import CellFooter from 'n7-react-weui/lib/cells/cell-footer';
import Page from 'n7-react-weui/lib/page';

var componentExample = require("!!raw!../examples/cells.example");

var descCh = {
  className: "用于添加自定义class属性",
  title:"[无默认]列表组标题",
  tips:"[无默认]列表组底部文字提示",
  access:"[默认:false]列表组链接/跳转模式",
  radio:"[默认:false]单选项列表组模式",
  checkbox:"[默认:false]多选项列表组模式",
  form:"[默认:false]表单列表组模式"
};

const CellsPage = () => (
  <div className="componentDetail">
    <h1 className="comptitle">Cells 列表组</h1>
    <p className="compdesc">列表又Cells和Cell组成. Cell提供CellHeader,CellBody,CellFooter三个模块以方便于创建自定义组建</p>
    <div className="component-documentation">
      <Playground
      docClass={Cells}
      propDescriptionMap={descCh}
      codeText={componentExample}
      scope={{React: React, Page:Page, Cells: Cells, Cell: Cell, CellHeader:CellHeader,CellBody:CellBody,CellFooter:CellFooter}} />
    </div>
  </div>
);

export default CellsPage;