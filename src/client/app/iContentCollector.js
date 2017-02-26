import React from 'react';
import App from "./index";
import '../style/style.css';
import '../style/menu.css';
import {render} from 'react-dom';
import ProspectList from "./prospect/listProspect";
import Collection from "./collection";
import ProspectForm from "./prospect/ProspectForm";
import { Router, Route, IndexRoute,browserHistory } from 'react-router';
import configureStore from './store/store';
import { Provider } from 'react-redux';
const store = configureStore();

const icontentCollector=(
  <Provider store={store}>
   <Router history={browserHistory}>
    <Route path="/" component={App}>
	    <IndexRoute component={ProspectList}/>
	    <Route path="/prospect" component={ProspectList}/>
	    <Route path="/collection" component={Collection}/>
    </Route>
   </Router>
  </Provider>
 );
render(icontentCollector, document.getElementById('app'));
