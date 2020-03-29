import React, { useState } from 'react';
import { Card } from './Card';
import { CardOnClick } from 'CardOnClick';

export const App = () => {
	const [ clicked, setClicked ] = useState(false);
	const [ clicked2, setClicked2 ] = useState(false);
	const [ clicked3, setClicked3 ] = useState(false);

	const handleOnClick = () => {
		setClicked(true);
	};

	const handleOnClick2 = () => {
		setClicked2(true);
	};

	const handleOnClick3 = () => {
		setClicked3(true);
	};

	return (
		<div className="App">
			<div>
				{!clicked && (
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
						onClick={handleOnClick}
					/>
				)}
				{clicked && (
					<CardOnClick
						title="Lemon"
						titleClr={'#166F39'}
						emoji={'🍋'}
						primaryClr={'#8CFFBA'}
						secondaryClr={'#CFFFE2'}
					/>
				)}
			</div>
			<div>
				{!clicked2 && (
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
						onClick={handleOnClick2}
					/>
				)}
				{clicked2 && (
					<CardOnClick
						title="Rocket"
						primaryClr={'#A6CFE2'}
						titleClr={'#0B0C11'}
						emoji={'🚀'}
						secondaryClr={'#C2DCE9'}
					/>
				)}
			</div>
			<div>
				{!clicked3 && (
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
						onClick={handleOnClick3}
					/>
				)}
				{clicked3 && (
					<CardOnClick
						title="Doggy"
						primaryClr={'#EEB200'}
						titleClr={'#502F7E'}
						emoji={'🐶'}
						secondaryClr={'#FFE086'}
					/>
				)}
			</div>
		</div>
	);
};
