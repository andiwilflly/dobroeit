class ContactsPage extends React.Component {

	render() {
		return (
			<div className="content-news content-news-contacts">
				<span className="content-news-contacts-date"> February 12, 2016 </span>

				<h2>
					<a>My contacts </a>
				</h2>

				<p className="content-news-contacts-short-info">If you wish to contact me here is my data</p>

				<div className="content-news-contacts-info">

					<ul className="content-news-contacts-info-short-text">
						<li><a className="content-news-contacts-info-short-text-image-contact name"></a>Name: Vladymir A.Sedikh</li>
						<li><a className="content-news-contacts-info-short-text-image-contact house"></a>Address: Kiev</li>
						<li><a className="content-news-contacts-info-short-text-image-contact phone"></a>Phone: 0976133552</li>
						<li><a className="content-news-contacts-info-short-text-image-contact e-mail"></a>E-mail: andiwillfly@gmail.com</li>
						<li><a className="content-news-contacts-info-short-text-image-contact skype"></a>Skype: ult.ward</li>
						<li><a className="content-news-contacts-info-short-text-image-contact linkedin"></a>linkedin: linkedin.com/profile/view?id=193334785
						</li>
					</ul>
				</div>
			</div>

		);
	}
}

export default ContactsPage;
