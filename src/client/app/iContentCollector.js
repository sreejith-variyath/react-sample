import React from 'react';
import App from "./index";
import '../style/style.css';
import {render} from 'react-dom';
import ProspectList from "./prospect/listProspect";
import Collection from "./collection";
import { Router, Route, IndexRoute,browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store,{history} from './store/store';

const icontentCollector=(
  <Provider store={store}>
   <Router history={history}>
    <Route path="/" component={App}>
	    <IndexRoute component={ProspectList}/>
	    <Route path="/prospect" component={ProspectList}/>
	    <Route path="/collection" component={Collection}/>
    </Route>
   </Router>
  </Provider>
 );
render(icontentCollector, document.getElementById('app'));
