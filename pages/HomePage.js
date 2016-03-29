class HomePage extends React.Component {

	render() {
		return (
			<div>
				<h2>{ i18n.t('My portfolio') }</h2>

				<div className="sites-block">
					<div className="sites-block__site cf">
						<a className="sites-block__image-site"></a>
						<a className="sites-block__name-site">Бобрик</a>
					</div>
					<div className="sites-block__site cf">
						<a className="sites-block__image-site"></a>
						<a className="sites-block__name-site">Бобрюкович</a>
					</div>
					<div className="sites-block__site cf">
						<a className="sites-block__image-site"></a>
						<a className="sites-block__name-site">Бобрикович</a>
					</div>
					<div className="sites-block__site cf">
						<a className="sites-block__image-site"></a>
						<a className="sites-block__name-site">Бобер</a>
					</div>
					<div className="sites-block__site cf">
						<a className="sites-block__image-site"></a>
						<a className="sites-block__name-site">Бобрикович</a>
					</div>
					<div className="sites-block__site cf">
						<a className="sites-block__image-site"></a>
						<a className="sites-block__name-site">Бобрук</a>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
