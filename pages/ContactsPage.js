class ContactsPage extends React.Component {

	render() {
		return (
			<div className="content-news content-news-contacts">
				<span className="date"> February 12, 2016 </span>

				<h2>
					<a>My contacts </a>
				</h2>

				<p className="short-info">If you wish to contact me here is my data</p>

				<ul className="info">
					<li>
						<a className="info__image name"></a>
						Name: Vladymir A.Sedikh
					</li>
					<li>
						<a className="info__image house"></a>
						Address: Kiev
					</li>
					<li>
						<a className="info__image phone"></a>
						Phone: 0976133552
					</li>
					<li>
						<a className="info__image e-mail"></a>
						E-mail: andiwillfly@gmail.com
					</li>
					<li>
						<a className="info__image skype"></a>
						Skype: ult.ward
					</li>
					<li>
						<a className="info__image linkedin"></a>
						linkedin: linkedin.com/profile/view?id=19333478
					</li>
				</ul>
			</div>

		);
	}
}

export default ContactsPage;
