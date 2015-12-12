import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import Dialog from 'n7-react-weui/lib/dialog';
import Button from 'n7-react-weui/lib/button';
import Page from 'n7-react-weui/lib/page';

var componentExample = require("!!raw!../examples/dialog.example");

var descCh = {
  className: "用于添加自定义class属性",
  icon:"[默认无]自定义icon样式",
  type:"[默认alert]对话框样式,分为alert和confirm",
  header:"[默认无]标题外可用此选项而外提供内容",
  title:"[默认无]对话框标题",
  actions:"[默认:空array] 按钮定义，保护名字label,触发事件onClick和主按钮primary选项",
  onMaskClick:"[默认无] 当用户点击对话框外的触发事件",
  onClick:"[默认:false] 当选项被点击时候的函数",
  show:"[默认:false] 默认是否显示",
};

const DialogPage = () => (
  <div className="componentDetail">
    <h1 className="comptitle">Dialog 对话框</h1>
    <p className="compdesc">若系统的alert窗体无法满足网页的临时视图内容需求，则可以自定义实现与alert形式相似的dialog，并且在dialog中可以自定义地使用各种控件，来满足需求。</p>
    <div className="component-documentation">
      <Playground
      docClass={Dialog}
      propDescriptionMap={descCh}
      codeText={componentExample}
      scope={{React: React, Page:Page, Dialog: Dialog, Button:Button}} />
    </div>
  </div>
);

export default DialogPage;