class NewsPage extends React.Component {

	componentDidMount() {
		// @SOURCE: https://developers.google.com/chart/interactive/docs/quick_start
		// Set a callback to run when the Google Visualization API is loaded.
		google.charts.setOnLoadCallback(()=> {
			// Create the data table.
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Topping');
			data.addColumn('number', 'Slices');
			data.addRows([
				['Кисонька', 3],
				['Пуськевич', 1],
				['Зая', 1],
				['Пуська', 2],
				['Таня', 2]
			]);

			// Set chart options
			var options = {
				'title': 'Статистика имен',
				'width': 400,
				'height': 400
			};

			// Instantiate and draw our chart, passing in some options.
			var chart = new google.visualization.PieChart(this.refs.chart);  // BarChart
			chart.draw(data, options);
		});
	}


	render() {
		return (
			<div>
				NewsPage
				<a href="https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=frontend%20news&start=3">google news</a>
				<hr/>
				<div ref="chart"></div>
			</div>
		);
	}
}

export default NewsPage;
