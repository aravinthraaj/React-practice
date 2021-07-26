import React, { Component } from 'react';

class Message extends Component {
	
	
	constructor() {
		super();
        // this.changename = this.props.name;
		this.state = {
			message: 'Hello',
			name: '',
		};
	}

	handleChange() {
		this.setState({
			name: this.props.name,
		});
	}

	render() {
		return (
			<div>
				<h1>Welcome from message component {this.state.name}</h1>
				<button onClick={() => this.handleChange()}>
					Wanna change
				</button>
			</div>
		);
	}
}

export default Message;
