import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import Main from './components/page-main';
import Template from './template';
import ComponentsMain from './components/page-components-main';
import ButtonPage from './components/page-components-button';
import InstallPage from './components/page-install';


const App = () => (
    <Router>
      <Route path="/" component={ Template }>
        <IndexRoute component={ Main } />
        <Route path="/install" component={ InstallPage } />
      </Route>
      <Route path="components" component={ ComponentsMain }>
        <IndexRoute component={ ButtonPage } />
        <Route path="/components/button" component={ ButtonPage } />
      </Route>
    </Router>
);

ReactDOM.render(<App/>, document.getElementById('main'));