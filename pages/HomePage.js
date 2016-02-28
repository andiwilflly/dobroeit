class HomePage extends React.Component {

	componentDidMount() {
		google.charts.setOnLoadCallback(()=> {
			var data = google.visualization.arrayToDataTable(
				[ ['Phrases'],
					['кошки лучше собак'],
					['кошки едят рыбку'],
					['кошки лучше попугаев'],
					['кошки офигенные'],
					['кошки едят мясо'],
					['кошки мяукают'],
					['кошки едят сало'],
					['кошки едят мышку'],
					['кошки лучше чем котята'],
					['кошки хуже чем люди'],
					['кошки хуже чем овцы'],
					['кошки умные'],
					['кошки красивые'],
					['кошки мягкие'],
					['кошки пушистые']
				]
			);

			var options = {
				wordtree: {
					format: 'implicit',
					word: 'кошки'
				}
			};

			var chart = new google.visualization.WordTree(this.refs.wordtree);
			chart.draw(data, options);
		});
	}


	render() {
		return (
			<div>
				HomePage
				<hr/>
				<div ref="wordtree"></div>
			</div>
		);
	}
}

export default HomePage;
