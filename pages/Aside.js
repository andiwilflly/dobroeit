import { Link } from 'react-router';


class Aside extends React.Component {

	render() {

		return (
			<div className="sidebar header">
				<h1 className="sidebar-aside-logo">
					<a className="sidebar-aside-logo-link">DOBROE IT</a>
				</h1>

				<div className="box sidebar-aside-nav">
					<ul>
						<li className="sidebar-aside-nav-first-aside-link">
							<Link to={ '/' }>Main</Link>
						</li>
						<li>
							<Link to={ '/resume' }>Resume</Link>
						</li>
						<li>
							<Link to={ '/portfolio' }>Portfolio</Link>
						</li>
						<li>
							<Link to={ '/skills' }>Skills</Link>
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
							<Link to={ '/contacts' }>Contacts</Link>
						</li>
					</ul>

				</div>

				<div className="box sidebar-aside-search">
					<form method="post" action="#">
						<input type="text" className="sidebar-aside-search-text-input" name="search" placeholder="Search" />
					</form>
				</div>
				<div className="box sidebar-aside-tags">
					<div className="sidebar-aside-tags-inside">
						<p><strong>Striped:</strong>
							A free and fully responsive HTML5 site template designed by
							<a>AJ</a> for
							<a>HTML5 UP</a>
						</p>
					</div>
				</div>
				<div className="box sidebar-aside-recent-posts">
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
				<div className="box sidebar-sidebar-recent-comments">
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
