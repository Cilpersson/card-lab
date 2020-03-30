import React, { useState } from 'react';
import { Card } from './Card';

export const App = () => {
	return (
		<div className="App">
			<Card
				title="Lemon"
				titleClr={'#166F39'}
				primaryClr={'#8CFFBA'}
				emoji={'🍋'}
				subtitle="This is a real tasty fruit!"
				subClr={'#000000'}
				buttonText="ORDER NOW"
				secondaryClr={'#CFFFE2'}
				btnClr={'#FCED84'}
				btnTxtClr={'#000000'}
			/>

			<Card
				title="Rocket"
				titleClr={'#0B0C11'}
				emoji={'🚀'}
				subtitle="Join us in to the outer space!"
				subClr={'#0B0C11'}
				buttonText="BOOK SEAT"
				btnTxtClr={'#FFD600'}
				primaryClr={'#A6CFE2'}
				secondaryClr={'#C2DCE9'}
				btnClr={'#0B0C11'}
			/>
			<Card
				title="Doggy"
				titleClr={'#502F7E'}
				emoji={'🐶'}
				subtitle="This is a really cute dog"
				subClr={'#502F7E'}
				buttonText="ADOPT ME"
				btnTxtClr={'#502F7E'}
				primaryClr={'#EEB200'}
				secondaryClr={'#FFE086'}
				btnClr={'#FFFFFF'}
			/>
		</div>
	);
};
