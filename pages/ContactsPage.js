class ContactsPage extends React.Component {

	render() {
		return (
			<div className="content-news" id="content-news-contacts">
				<span className="content-date"> February 12, 2016 </span>

				<h2>
					<a>My contacts </a>
				</h2>

				<p className="short-content-info">If you wish to contact me here is my data</p>

				<div className="content-info">

					<ul className="content-short-text">
						<li><a className="content-text-image-contact name"></a>Name: Vladymir A.Sedikh</li>
						<li><a className="content-text-image-contact house"></a>Address: Kiev</li>
						<li><a className="content-text-image-contact phone"></a>Phone: 0976133552</li>
						<li><a className="content-text-image-contact e-mail"></a>E-mail: andiwillfly@gmail.com</li>
						<li><a className="content-text-image-contact skype"></a>Skype: ult.ward</li>
						<li><a className="content-text-image-contact linkedin"></a>linkedin: linkedin.com/profile/view?id=193334785
						</li>
					</ul>
				</div>
			</div>

		);
	}
}

export default ContactsPage;
