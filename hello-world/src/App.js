import React, { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Greet />
				<Welcome />
			</div>
		);
	}
}

export default App;
