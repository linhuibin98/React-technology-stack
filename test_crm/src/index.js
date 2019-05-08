import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';

//routes
import Home from './routers/Home';
import Nav from './component/Nav';
import Custom from './routers/custom';
import Plan from './routers/Plan';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <div>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/custom' component={Custom} />
          <Route path='/plan' component={Plan} />
          <Redirect to='/?lx=unsafe' />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
), document.getElementById('root'));


