import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import Message from 'n7-react-weui/lib/message';
import Page from 'n7-react-weui/lib/page';

var componentExample = require("!!raw!../examples/msgpage.example");

var descCh = {
  className: "用于添加自定义class属性",
  icon:"[默认无]图表区域",
  title:"[默认无]标题",
  actions:"[默认空array]按钮列，label为按钮内容，其他属性继承按钮",
  extra:"[默认无]底部资料区",
};

const MsgPage = () => (
  <div className="componentDetail">
    <h1 className="comptitle">MsgPage 结果页</h1>
    <p className="compdesc">结果页通常来说可以认为进行一系列操作步骤后，作为流程结束的总结性页面。结果页的作用主要是告知用户操作处理结果以及必要的相关细节（可用于确认之前的操作是否有误）等信息；若该流程用于开启或关闭某些重要功能，可在结果页增加与该功能相关的描述性内容；除此之外，结果页也可以承载一些附加价值操作，例如提供抽奖、关注公众号等功能入口。</p>
    <div className="component-documentation">
      <Playground
      docClass={Message}
      propDescriptionMap={descCh}
      codeText={componentExample}
      scope={{React: React, Page:Page, Message: Message}} />
    </div>
  </div>
);

export default MsgPage;