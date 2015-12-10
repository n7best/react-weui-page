import React from 'react';
import Editor from './editor';

var installwebpack = require("!!raw!../examples/installwebpack.example");
var npminstall = require("!!raw!../examples/npminstall.example");
var basicusuage = require("!!raw!../examples/basicusuage.example");
var customestyle1 = require("!!raw!../examples/customstyle1.example");
var customestyle2 = require("!!raw!../examples/customstyle2.example");

const InstallPage = () => (
  <div style={{textAlign:"left",paddingTop:"40px"}}>
    <h1>Installation - 安装</h1>
    <p>React-weui是react的一个组件组，基于微信官方的weui. 安装前提需要你的项目使用Webpack环境. React-weui使用ES2015拟写,目前需要用babel和less来输出.</p>
    <br/>
    <p>以下是样式的webpack 配置</p>
    <br/>
    <Editor
      codeText={installwebpack}
      theme="monokai" />
    <br/>
    <h1>安装</h1>
    <p>React-weui可以用npm安装</p>
    <br/>
    <Editor
      codeText={npminstall}
      theme="monokai" />
    <br/>
    <h1>基础用法</h1>
    <p>虽然有其他途径的使用方法，还是推荐使用Webpack带上Babel Loader, CSS Loader and Less Loader</p>
    <p>当你把环境都设置好后你可以用以下方法提供组件</p>
    <br/>
    <Editor
      codeText={basicusuage}
      theme="monokai" />
    <br/>
    <h1>自定义样式</h1>
    <p>因为weiui是用css制作，所以改变样式也非常简单</p>
    <h2>通过className来改变</h2>
    <p>每个组建都会有一个className属性，你可以通过这个属性加载进自己的样式</p>
    <br/>
    <Editor
      codeText={customestyle1}
      theme="monokai" />
    <br/>
    <p>在你的css里头你就可以添加</p>
    <br/>
    <Editor
      codeText={customestyle2}
      theme="monokai" />
    <br/>
  </div>
);

export default InstallPage;