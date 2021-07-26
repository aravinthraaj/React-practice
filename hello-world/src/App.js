import React, { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Counter></Counter> */}
				{/* <Hello /> */}
				{/* <Greet name="Aravinth" test="test value">
					hakjhdskjhsdkjhkljhfkjkhfdjshjaljkdsjkldh
				</Greet>
				<Greet name="Abinaya" test="test value">
					<button>Hai</button>
				</Greet> */}
				{/* <Welcome name="Aravinth" age="76" /> */}
				<FunctionClick></FunctionClick>

				{/* <Message name="Hasim"></Message>
				<Message name="Abi"></Message>
				<Message name="dddd"></Message> */}
			</div>
		);
	}
}

export default App;
