import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}
	addCounter() {
		this.setState({
			count: this.state.count + 1,
		});
	}
	subCounter() {
		this.setState({
			count: this.state.count - 1,
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={() => this.subCounter()}>Remove</button>

				<button onClick={() => this.addCounter()}>Add</button>
			</div>
		);
	}
}

export default Counter;
