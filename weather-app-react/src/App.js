import React from 'react';

import Frame from './components/Frame/Frame';
import Home from './containers/Home/Home';

import './App.scss';

function App() {
	return(
		<div className="app">

			<Frame>
				<Home/>
			</Frame>

		</div>
	);
}

export default App;
