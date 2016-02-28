import { Link } from 'react-router';
import Aside from 'pages/Aside.js';


class Layout extends React.Component {

	render() {

		return (
			<div className="page-content">
				<Aside />
				<div className="content">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default Layout;
