import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import notFound from '../pages/notFound';
import Home from '../pages/Home';

import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={notFound}></Route>
          {/* <Redirect from="*" to="/404" /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
