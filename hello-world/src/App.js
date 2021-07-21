import React, { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Hello /> */}
				<Greet name="Aravinth" test="test value" />
				<Greet name="Abinaya" test="test value" />
				{/* <Welcome /> */}
			</div>
		);
	}
}

export default App;
