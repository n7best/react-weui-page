import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import Article from 'n7-react-weui/lib/article';
import Page from 'n7-react-weui/lib/page';

var componentExample = require("!!raw!../examples/article.example");

var descCh = {
  className: "用于添加自定义class属性",
};

const ArticlePage = () => (
  <div className="componentDetail">
    <h1 className="comptitle">Article 文字视图</h1>
    <p className="compdesc">文字视图显示大段文字，这些文字通常是页面上的主体内容。Article支持分段、多层标题、引用、内嵌图片、有/无序列表等富文本样式，并可响应用户的选择操作。</p>
    <div className="component-documentation">
      <Playground
      docClass={Article}
      propDescriptionMap={descCh}
      codeText={componentExample}
      scope={{React: React, Page:Page, Article: Article}} />
    </div>
  </div>
);

export default ArticlePage;