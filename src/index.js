
import React from 'react'
import ReacDom from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'


import './assets/css/app.css'


ReacDom.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>	
	,
	document.getElementById("root")
);

