import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import Progress from 'n7-react-weui/lib/progress';
import Page from 'n7-react-weui/lib/page';

var componentExample = require("!!raw!../examples/progress.example");

var descCh = {
  className: "用于添加自定义class属性",
  percent:"[默认0]进度百分比"
};

const ProgressPage = () => (
  <div className="componentDetail">
    <h1 className="comptitle">Dialog 对话框</h1>
    <p className="compdesc">progress用于上传、下载等耗时并且需要显示进度的场景，用户可以随时中断该操作。</p>
    <div className="component-documentation">
      <Playground
      docClass={Progress}
      propDescriptionMap={descCh}
      codeText={componentExample}
      scope={{React: React, Page:Page, Progress: Progress}} />
    </div>
  </div>
);

export default ProgressPage;