import React from 'react';

function FunctionClick() {
	function clickHandler() {
		console.log('am executed');
	}

	return (
		<div>
			<button onClick={clickHandler}>Hai</button>
		</div>
	);
}

export default FunctionClick;
