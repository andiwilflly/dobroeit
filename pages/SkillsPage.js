class SkillsPage extends React.Component {

	componentDidMount() {
		// @SOURCE: https://developers.google.com/chart/interactive/docs/quick_start
		// Set a callback to run when the Google Visualization API is loaded.
		google.charts.setOnLoadCallback(()=> {
			// Create the data table.
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Topping');
			data.addColumn('number', 'Slices');
			data.addRows([
				['HTML5', 10],
				['SCSS',10],
				['JavaScript', 9],
				['React', 9],
				['Sass', 9]
			]);

			// Set chart options
			var options = {
				'title': 'My knowledge',
				'width': 500,
				'height': 500
			};

			// Instantiate and draw our chart, passing in some options.
			var chart = new google.visualization.PieChart(this.refs.chart);  // BarChart
			chart.draw(data, options);
		});
	}


	render() {
		return (
			<div className="content-news">
				SkillsPage
				<hr/>
				<div ref="chart"></div>
			</div>
		);
	}
}

export default SkillsPage;
