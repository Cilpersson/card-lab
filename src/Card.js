import React from 'react';
import './index.css';

export const Card = ({
	title,
	emoji,
	subtitle,
	buttonText,
	primaryClr,
	secondaryClr,
	btnClr,
	clicked,
	setClicked,
	titleClr,
	subClr,
	btnTxtClr
}) => {
	const changeState = (event) => {
		event.preventDefault();
		if (!clicked) {
			setClicked(true);
		}
	};

	return (
		<article style={{ backgroundColor: primaryClr }} className="card-container">
			<div className="title-container">
				<h1
					style={{
						backgroundColor : primaryClr,
						color           : titleClr
					}}
				>
					{title}
				</h1>
				<span className="emoji">{emoji}</span>
			</div>
			<div style={{ backgroundColor: secondaryClr }} className="light-section">
				<h2
					style={{
						backgroundColor : secondaryClr,
						color           : subClr
					}}
				>
					{subtitle}
				</h2>
				<button type="button " onClick={changeState} style={{ backgroundColor: btnClr, color: btnTxtClr }}>
					{buttonText}
				</button>
			</div>
		</article>
	);
};
