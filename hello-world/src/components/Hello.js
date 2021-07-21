import React from 'react';

const Hello = () => {
	/**
	 * * With JSX
	 * ? Very simple to write
	 */
	return (
		<div className="dummyclass">
			<h1>Hello Aravinth</h1>
		</div>
	);
	/**
	 * * Without JSX
	 * ! complicated
	 */
	// return React.createElement(
	// 	'div',
	// 	{ id: 'hello', class: 'dummyclass' },
	// 	React.createElement('h1', null, 'Hello Aravinth')
	// );
};

export default Hello;
