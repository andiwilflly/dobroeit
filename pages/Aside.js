import { Link } from 'react-router';


class Aside extends React.Component {

	render() {

		return (
			<div className="sidebar">

				<h1 className="site-logo">
					<a className="site-logo__link">DOBROE IT</a>
				</h1>

				<ul className="box navigation">
					<li className="navigation__item">
						<Link to={ `/${this.props.params.lang}` }>{ i18n.t('Main') }</Link>
					</li>
					<li className="navigation__item">
						<Link to={ `/${this.props.params.lang}/resume` }>{ i18n.t('Resume') }</Link>
					</li>
					<li className="navigation__item">
						<Link to={ `/${this.props.params.lang}/portfolio` }>{ i18n.t('Portfolio') }</Link>
					</li>
					<li className="navigation__item">
						<Link to={ `/${this.props.params.lang}` }>{ i18n.t('Skills') }</Link>
					</li>
					<li className="navigation__item">
						<Link to={ `/${this.props.params.lang}` }>{ i18n.t('Services') }</Link>
					</li>
					<li className="navigation__item">
						<Link to={ `/${this.props.params.lang}` }>{ i18n.t('My way') }</Link>
					</li>
					<li className="navigation__item">
						<Link to={ `/${this.props.params.lang}` }>{ i18n.t('To order a site') }</Link>
					</li>
					<li className="navigation__item">
						<Link to={ `/${this.props.params.lang}` }>{ i18n.t('Contacts') }</Link>
					</li>
				</ul>

				<div className="box search">
					<form>
						<input type="text" className="search__input" name="search" placeholder="Search"/>
					</form>
				</div>

				<div className="box tags">
					<div className="tags__inner">
						<p>
							<strong>Striped:</strong>
							A free and fully responsive HTML5 site template designed by
							<a>AJ</a> for
							<a>HTML5 UP</a>
						</p>
					</div>
				</div>

				<div className="box recent-posts">
					<h3>Recent Posts</h3>
					<ul>
						<li>
							<a>Lorem ipsum dolor</a>
						</li>
						<li>
							<a>Feugiat nisl aliquam</a>
						</li>
						<li>
							<a>Sed dolore magna</a>
						</li>
						<li>
							<a>Malesuada commodo</a>
						</li>
						<li>
							<a>Malesuada commodo</a>
						</li>
					</ul>
				</div>

				<div className="box recent-comments">
					<h3>Recent Comments</h3>
					<ul>
						<li>case on <a>Lorem ipsum dolor</a></li>
						<li>molly on <a>Sed dolore magna</a></li>
						<li>case on <a>Sed dolore magna</a></li>
					</ul>
				</div>

				<div className="box calendar"></div>
				<ul className="copyright"></ul>
			</div>
		);
	}
}

export default Aside;
