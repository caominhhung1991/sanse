import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
// import WidgetDetails from './components/WidgetDetails/WidgetDetails';
import Layout from './hoc/Layout/Layout';
import SanSe from './containers/sanse/SanSe';
import KhoaHocDetails from './components/KhoaHoc/KhoaHocDetails/KhoaHocDetails';
import User from './components/User/User';

const App = () => {
	return (
			<Layout>
					<Switch>
						<Route exact path="/" component={SanSe} />
						<Route path="/khoahoc-details/:id" component={KhoaHocDetails}/>
						<Route path="/user" component={User}/>
					</Switch>
			</Layout>
	);
};

export default App;