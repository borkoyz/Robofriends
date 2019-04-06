import React from 'react';

const ToggleButton = ({dataFn,dataView})=>{
	const displayData = (dV)=>{
		return !dV ?'Local' : 'Internet';
	};
	return(
		<div className='pa3'>
		<h2>Display Data: {displayData(dataView)}</h2>
		<button onClick={dataFn}>Toggle Data</button>
		</div>
	);

};

export default ToggleButton;