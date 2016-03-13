require('scss/content/pills.scss');


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
				['JavaScript', 80],
				['React/Flux', 75],
				['Babel ES6', 90],
				['jQuery', 95],
				['webpack', 70],
				['BackboneJs', 80],
				['Git', 60],
				['SCSS', 95],
				['Compass', 95],
				['Bootstrap', 90],
				['CSS3', 90],
				['CSS ', 95],
				['AJAX', 95],
				['HTML', 95],
				['Photoshop', 50],
				['HTML5', 70]
			]);

			// Set chart options
			var options = {
				'title': 'My knowledge, in %',
				'width': 750,
				'height': 750
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

				<hr/>

				<ul className="pills block-buttons">
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">JavaScript 80%</span>
						</a>
					</li>
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">React/Flux 75%</span>
						</a>
					</li>
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">Babel ES6 90%</span>
						</a>
					</li>
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">jQuery 95%</span>
						</a>
					</li>
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">webpack 70%</span>
						</a>
					</li>
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">BackboneJs 80%</span>
						</a>
					</li>
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">Git 60%</span>
						</a>
					</li>
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">SCSS 95%</span>
						</a>
					</li>
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">Compass 95%</span>
						</a>
					</li>
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">Bootstrap 90%</span>
						</a>
					</li>
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">CSS3 90%</span>
						</a>
					</li>
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">CSS 95%</span>
						</a>
					</li>
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">AJAX 95%</span>
						</a>
					</li>
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">HTML 95%</span>
						</a>
					</li>
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">Photoshop 50%</span>
						</a>
					</li>
					<li className="block-buttons__skill">
						<a>
							<span className="wrap">HTML 95%</span>
						</a>
					</li>
				</ul>

			</div>
		);
	}
}

export default SkillsPage;
