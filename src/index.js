import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
registerServiceWorker();
