import React, { useState } from 'react';
import { Card } from './Card';
import { CardOnClick } from 'CardOnClick';

export const App = () => {
	const [ clicked, setClicked ] = useState(false);
	const titleClr = '#0B0C11';
	const subClr = '#0B0C11';
	const btnTxtClr = '#FFD600';
	const primaryClr = '#A6CFE2';
	const secondaryClr = '#C2DCE9';
	const btnClr = '#0B0C11';

	if (clicked === false) {
		return (
			<div>
				<Card
					title="Rocket"
					titleClr={titleClr}
					emoji={'🚀'}
					subtitle="Join us in to the outer space!"
					subClr={subClr}
					buttonText="BOOK SEAT"
					btnTxtClr={btnTxtClr}
					primaryClr={primaryClr}
					secondaryClr={secondaryClr}
					btnClr={btnClr}
					clicked={clicked}
					setClicked={setClicked}
				/>
			</div>
		);
	} else {
		return (
			<div>
				<CardOnClick
					title="Rocket"
					primaryClr={primaryClr}
					titleClr={titleClr}
					emoji={'🚀'}
					secondaryClr={secondaryClr}
				/>
			</div>
		);
	}
};
