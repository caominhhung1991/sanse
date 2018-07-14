import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
// import WidgetDetails from './components/WidgetDetails/WidgetDetails';
import Layout from './hoc/Layout/Layout';
import SanSe from './containers/sanse/SanSe';

const App = () => {
	return (
			<Layout>
					<Switch>
						<Route exact path="/" component={SanSe} />
						{/* <Route path="/widget-details/:type/:id" component={WidgetDetails}/> */}
					</Switch>
			</Layout>
	);
};

export default App;