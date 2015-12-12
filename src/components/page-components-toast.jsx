import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import Toast from 'n7-react-weui/lib/toast';
import Button from 'n7-react-weui/lib/button';
import Page from 'n7-react-weui/lib/page';

var componentExample = require("!!raw!../examples/toast.example");

var descCh = {
  className: "用于添加自定义class属性",
  icon:"[默认无]自定义icon样式",
  time:"[默认无]倒计时间",
  name:"[默认无]表单name属性",
  access:"[默认:false]  列表组access模式",
  disabled:"[默认:false] 禁用模式",
  onFinish:"[默认:false] 当toast完成时候的函数",
  onClick:"[默认:false] 当选项被点击时候的函数",
  show:"[默认:false] 默认是否显示",
  loading:"[默认:false] 是否显示读取图标",
};

const toast1 = {
    text: "已完",
    loading: false,
    time:3000
      };
const toast2 = {
    text: "数据加载中",
    loading: true,
    time: 1500
    };

const showToast = (toast) =>{
    let container = document.getElementById('toasts')
    ReactDOM.unmountComponentAtNode(container);
    let toastinstance = ReactDOM.render(<Toast show loading={toast.loading} time={toast.time}>{toast.text}</Toast>,container);
};

const ToastPage = () => (
  <div className="componentDetail">
    <h1 className="comptitle">Toast 提示</h1>
    <p className="compdesc">toast用于临时显示某些信息，并且会在数秒后自动消失。这些信息通常是轻量级操作的成功、失败或等待状态信息。</p>
    <div className="component-documentation">
      <Playground
      docClass={Toast}
      propDescriptionMap={descCh}
      codeText={componentExample}
      scope={{React: React, Page:Page, Toast: Toast, Button:Button, showToast:showToast,
              toast1:toast1, toast2:toast2}} />
    </div>
  </div>
);

export default ToastPage;