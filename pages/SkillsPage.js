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
				<h2>
					<a href="">SkillsPage</a>
				</h2>
				<hr/>
				<div ref="chart"></div>

				<hr/>

				<ul className="skills block-buttons">
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">JavaScript 80%</a>
					</li>
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">React/Flux 75%</a>
					</li>
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">Babel ES6 90%</a>

					</li>
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">jQuery 95%</a>
					</li>
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">webpack 70%</a>
					</li>
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">BackboneJs 80%</a>
					</li>
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">Git 60%</a>
					</li>
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">SCSS 95%</a>
					</li>
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">Compass 95%</a>
					</li>
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">Bootstrap 90%</a>
					</li>
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">CSS3 90%</a>
					</li>
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">CSS 95%</a>
					</li>
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">AJAX 95%</a>
					</li>
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">HTML 95%</a>
					</li>
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">Photoshop 50%</a>
					</li>
					<li className="block-buttons__skill">
						<a className="block-buttons__technology">HTML 95%</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default SkillsPage;
