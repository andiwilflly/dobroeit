import { Router, Route, IndexRoute } from 'react-router';
import Layout from 'Layout.js';
import LandingPage from 'pages/LandingPage.js';
import HomePage from 'pages/HomePage.js';
import NewsPage from 'pages/NewsPage.js';
import ResumePage from 'pages/ResumePage.js';
import ContactsPage from 'pages/ContactsPage.js';
import SkillsPage from 'pages/SkillsPage.js';
import FeedbackPage from 'pages/FeedbackPage.js';


export default class Routes extends React.Component {

	render() {
		return (
			<Router history={ this.props.history }>

				<Route path="/" component={LandingPage}/>

				<Route path="/:lang" component={Layout}>
					<IndexRoute component={HomePage}/>
					<Route path="/:lang/news" component={NewsPage}/>
					<Route path="/:lang/resume" component={ResumePage}/>
					<Route path="/:lang/contacts" component={ContactsPage}/>
					<Route path="/:lang/skills" component={SkillsPage}/>
					<Route path="/:lang/feedback" component={FeedbackPage}/>

					<Route path="*" component={HomePage}/>
				</Route>
			</Router>
		);
	}
}