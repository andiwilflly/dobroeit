import { Link } from 'react-router';


class Aside extends React.Component {

	render() {

		return (
			<div className="sidebar header">
				<h1 className="aside-logo">
					<a className="aside-logo-link">DOBROE IT</a>
				</h1>

				<div className="box aside-nav">
					<ul>
						<li className="first-aside-link">
							<Link to={ '/' }>Main</Link>
						</li>
						<li>
							<Link to={ '/resume' }>Resume</Link>
						</li>
						<li>
							<Link to={ '/portfolio' }>Portfolio</Link>
						</li>
						<li>
							<a href="#content-news-services">Services</a>
						</li>
						<li>
							<a href="#content-news-way">My way</a>
						</li>
						<li>
							<a href="#content-news-order">To order a site</a>
						</li>
						<li>
							<a href="#content-news-contacts">Contacts</a>
						</li>
					</ul>

				</div>

				<div className="box aside-search">
					<form method="post" action="#">
						<input type="text" className="text-input" name="search" placeholder="Search" />
					</form>
				</div>
				<div className="box aside-tags">
					<div className="aside-tags-inside">
						<p><strong>Striped:</strong>
							A free and fully responsive HTML5 site template designed by
							<a>AJ</a> for
							<a>HTML5 UP</a>
						</p>
					</div>
				</div>
				<div className="box recent-posts-aside">
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
				<div className="box recent-comments-aside">
					<h3>Recent Comments</h3>
					<ul>
						<li>case on <a>Lorem ipsum dolor</a></li>
						<li>molly on <a>Sed dolore magna</a></li>
						<li>case on <a>Sed dolore magna</a></li>
					</ul>
				</div>
				<div className="box calendar-aside"></div>
				<ul className="copyright"></ul>
			</div>
		);
	}
}

export default Aside;
