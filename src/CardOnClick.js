import React from 'react';
import './cardonclick.css';

export const CardOnClick = ({ title, emoji, primaryClr, secondaryClr, btnClr, titleClr, subClr }) => {
	return (
		<article className="card-container-two">
			<div
				className="title-container-two"
				style={{
					backgroundColor : primaryClr,
					color           : titleClr
				}}
			>
				<h1
					className="h1-two"
					style={{
						color : titleClr
					}}
				>
					{title}
				</h1>
			</div>
			<div
				style={{
					backgroundColor : secondaryClr,
					color           : subClr
				}}
				className="emoji-container-two"
			>
				<span className="emoji-two">{emoji}</span>
			</div>
		</article>
	);
};
