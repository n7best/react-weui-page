import React from 'react';
import Playground from 'component-playground';
import Cells from 'n7-react-weui/lib/cells/cells';
import InputCell from 'n7-react-weui/lib/cells/input-cell';
import ButtonArea from 'n7-react-weui/lib/button/button-area';
import Button from 'n7-react-weui/lib/button/';
import Page from 'n7-react-weui/lib/page';

var componentExample = require("!!raw!../examples/form.example");

const FormPage = () => (
  <div className="componentDetail">
    <h1 className="comptitle">表单</h1>
    <p className="compdesc">Cells列表组和Cell列表项延伸的自定义组件</p>
    <div className="component-documentation">
      <Playground
      codeText={componentExample}
      scope={{React: React, Page:Page, Cells: Cells, InputCell:InputCell, ButtonArea:ButtonArea, Button:Button}} />
    </div>
  </div>
);

export default FormPage;