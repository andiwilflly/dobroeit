
import { Link } from 'react-router';


class Layout extends React.Component {

	render() {

		return (
			<div>
				<ul>
					<li><Link to={ '/' }>Home</Link></li>
					<li><Link to={ '/news' }>News</Link></li>
					<li><Link to={ '/portfolio' }>Portfolio</Link></li>
				</ul>
				Layout
				<div>
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default Layout;
