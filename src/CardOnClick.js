import React from 'react';

export const CardOnClick = ({ title, emoji, primaryClr, secondaryClr, btnClr, titleClr, subClr }) => {
	return (
		<article style={{ backgroundColor: primaryClr }} className="card-container-two">
			<div className="title-container-two">
				<h1
					style={{
						backgroundColor : primaryClr,
						color           : titleClr
					}}
					className="h1-two"
				>
					{title}
				</h1>
			</div>
			<span
				style={{
					backgroundColor : secondaryClr,
					color           : subClr
				}}
				className="emoji-two"
			>
				{emoji}
			</span>
		</article>
	);
};
