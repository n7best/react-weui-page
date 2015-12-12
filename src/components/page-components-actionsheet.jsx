import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import Actionsheet from 'n7-react-weui/lib/actionsheet';
import Button from 'n7-react-weui/lib/button';
import Page from 'n7-react-weui/lib/page';

var componentExample = require("!!raw!../examples/actionsheet.example");

var descCh = {
  className: "用于添加自定义class属性",
  actions:"[默认:空array] 主按钮定义，包括名字label,触发事件onClick",
  menus:"[默认:空array] 菜单按钮定义，包括名字label,触发事件onClick",
  onMaskClick:"[默认无] 当用户点击对话框外的触发事件",
  show:"[默认:false] 默认是否显示",
};

const DialogPage = () => (
  <div className="componentDetail">
    <h1 className="comptitle">Actionsheet 操作表</h1>
    <p className="compdesc">用于显示包含一系列可交互的动作集合，包括说明、跳转等。由底部弹出，一般用于响应用户对页面的点击。</p>
    <div className="component-documentation">
      <Playground
      docClass={Actionsheet}
      propDescriptionMap={descCh}
      codeText={componentExample}
      scope={{React: React, Page:Page, Actionsheet: Actionsheet, Button:Button}} />
    </div>
  </div>
);

export default DialogPage;