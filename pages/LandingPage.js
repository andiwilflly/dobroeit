import { Link } from 'react-router';


class LandingPage extends React.Component {

	render() {
		return (
			<div>
				<ul id="clouds" className="clouds">
					<li className="cloud x1">
					</li>

					<li className="cloud x2">
					</li>

					<li className="cloud x3">
					</li>

					<li className="cloud x4">
					</li>

					<li className="cloud x5">
					</li>
				</ul>

				<div className="main-background">
					<div className="main-info">
						<div className="main-info-inner">
							<h2 className="main-h2">Hi!</h2>

							<p className="main-p"> I welcome you to its website.</p>
							<button className="main-button">
								<Link to={ '/ru' } classNameName="main-button-name">Home</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LandingPage;
