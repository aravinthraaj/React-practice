import React from 'react';

// function Greet() {
// 	return <h1>Hello Fellas...!</h1>;
// }

const Greet = (props) => {
	// console.log(props);
	// function handleclick() {
	// 	console.log('hello am here');
	// 	props.name = 'chnaged';
	// }
	return (
		<div>
			<h2>Hello {props.name}....!</h2>
			{/* <button>Click me </button> */}
		</div>
	);
};

export default Greet;
