import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/layout';
import CheckListInput from './components/Forms/checkListinput';
import Display from './components/Display';
import ListDetail from './components/ListDisplay';


class App extends Component {
  render() {
    return (
        <Layout>
        <Switch>
          <Route path='/' exact component={Display} />
          <Route path='/create' exact component={CheckListInput} />
          <Route path='/checklists/:id' exact component={ListDetail} />
          
        </Switch>
        </Layout>
    );
  }
}

export default App;
