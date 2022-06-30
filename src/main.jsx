import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './routes/App';
import * as bootstrap from 'bootstrap';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './styles/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
