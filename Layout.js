import { Link } from 'react-router';
import Aside from 'pages/Aside.js';


class Layout extends React.Component {

    constructor(props) {
        super();
        i18n.setLng(props.params.lang, function() {});
    }


	render() {
		return (
			<div className="page-content">
				<Aside {...this.props} {...this.state} />
				<div className="content">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default Layout;
