import ReactDOM from 'react-dom';
//import 'babel-core/lib/polyfill'; // For ES7 features
import Routes from 'Routes.js';
import { history } from 'xhistory.js';

require('./scss/main.scss');

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages': ['corechart', 'wordtree']});

ReactDOM.render(<Routes history={ history }/>, document.getElementById('root'));
