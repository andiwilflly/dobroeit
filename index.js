import ReactDOM from 'react-dom';
import 'babel-core/lib/polyfill'; // For ES7 features
import Routes from 'Routes.js';
import { history } from 'xhistory.js';

require('./scss/main.scss');

// Images
var requireImgs = require.context('./images/', true, /\.(jpe?g|png|gif|ico)$/i);
requireImgs.keys().forEach(requireImgs);

// Fonts
var requireFonts = require.context('./scss/_fonts/', true, /\.(ttf|eot|woff(2)?)$/);
requireFonts.keys().forEach(requireFonts);


// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages': ['corechart', 'wordtree']});

ReactDOM.render(<Routes history={ history }/>, document.getElementById('root'));
