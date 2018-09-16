import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import BasicMapView from './components/bmap/mapSample/BasicMapView';
ReactDOM.render(
<Router>
    <App>
        <Route exact path="/bmap/basic" component={BasicMapView} ></Route>
    </App>
</Router>, document.getElementById('root'));
registerServiceWorker();
