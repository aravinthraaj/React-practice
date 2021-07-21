import React from 'react';
/*
 * * Common function export
 */
// export default function Welcome() {
// 	return <div>Hai, I am from functuional component</div>;
// }

/**
 * * Function component Arrow function
 */

const Welcome = () => {
	return (
		<div>
			<h1>
				Hai i am also from functional component but as arrow function{' '}
			</h1>
		</div>
	);
};
export default Welcome;

/**
 * * Class component
 * ! for class component it is very important to import Component
 */
// import React, { Component } from 'react';

// export default class Welcome extends Component {
// 	render() {
// 		return <h2> Hai, I am from the class component</h2>;
// 	}
// }
