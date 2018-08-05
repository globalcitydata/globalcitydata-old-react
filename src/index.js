import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// CSS
import 'normalize.css';

// Views
import App from './views/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
