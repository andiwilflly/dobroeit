import { Router, Route, IndexRoute } from 'react-router';
import Layout from 'Layout.js';
import Landing from 'pages/LandingPage.js';
import HomePage from 'pages/HomePage.js';
import NewsPage from 'pages/NewsPage.js';
import ResumePage from 'pages/ResumePage.js';


export default class Routes extends React.Component {

	render() {
		return (
			<Router history={ this.props.history }>
				<Route path="/" component={Layout}>
					<IndexRoute component={HomePage} />
					<Route path="/news" component={NewsPage} />
					<Route path="/resume" component={ResumePage} />

					<Route path="*" component={HomePage} />
				</Route>

			</Router>
		);
	}
}