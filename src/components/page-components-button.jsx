import React from 'react';
import Playground from 'component-playground';
import Button from 'n7-react-weui/lib/button';
import Page from 'n7-react-weui/lib/page';

var componentExample = require("!!raw!../examples/button.example");

var descCh = {
  className: "用于添加自定义class属性",
  href:"按钮链接",
  type:"[默认default] 按钮样式 (default,warn,primary) 灰色，绿色，红色",
  disabled:"[默认false] 按钮是否激活",
  plain:"[默认false] 按钮平面样式",
  mini:"[默认false] 小型按钮平面样式",
  loading:"[默认false] 按钮读取状态"
};

const ButtonPage = () => (
  <div className="componentDetail">
    <h1 className="comptitle">Button 按钮</h1>
    <div className="component-documentation">
      <Playground
      docClass={Button}
      propDescriptionMap={descCh}
      codeText={componentExample}
      scope={{React: React, Page:Page, Button: Button}} />
    </div>
  </div>
);

export default ButtonPage;