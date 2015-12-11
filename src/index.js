import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import Main from './components/page-main';
import Template from './template';
import ComponentsMain from './components/page-components-main';
import ButtonPage from './components/page-components-button';
import InstallPage from './components/page-install';
import CellsPage from './components/page-components-cells';
import CellPage from './components/page-components-cell';
import SwitchCellPage from './components/page-components-switchcell';
import RadioCellPage from './components/page-components-radiocell';
import CheckboxCellPage from './components/page-components-checkboxcell';
import FormPage from './components/page-components-form';
import SelectPage from './components/page-components-select';

const App = () => (
    <Router>
      <Route path="/" component={ Template }>
        <IndexRoute component={ Main } />
        <Route path="/install" component={ InstallPage } />
      </Route>
      <Route path="components" component={ ComponentsMain }>
        <IndexRoute component={ ButtonPage } />
        <Route path="/components/button" component={ ButtonPage } />
        <Route path="/components/cells" component={ CellsPage } />
        <Route path="/components/cell" component={ CellPage } />
        <Route path="/components/switchcell" component={ SwitchCellPage } />
        <Route path="/components/radiocell" component={ RadioCellPage } />
        <Route path="/components/checkboxcell" component={ CheckboxCellPage } />
        <Route path="/components/form" component={ FormPage } />
        <Route path="/components/select" component={ SelectPage } />
      </Route>
    </Router>
);

ReactDOM.render(<App/>, document.getElementById('main'));