import React from 'react';

export default function PosterItem({ id, background, title, poster }) {
	return (
		<div
			data-id={id}
			data-color={background}
			className="poster-item-wrapper"
			key={id}
		>
			<div className="poster-item-container">
				<div className="poster-cover-container">
					<img src={poster} alt="" />
				</div>
				<div className="poster-info-container">
					<h3>{title}</h3>
					<p>Watch It</p>
				</div>
			</div>
		</div>
	);
}
