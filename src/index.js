import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import AdminLayout from './layouts/Admin.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import 'assets/scss/amsurg-style-guide.scss';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			<Route path='/admin' render={props => <AdminLayout {...props} />} />
			<Redirect to='/admin/dashboard' />
		</Switch>
	</Router>,
	document.getElementById('root')
);
