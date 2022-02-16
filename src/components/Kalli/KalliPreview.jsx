import React, { useContext, useEffect } from 'react';
import MoviesContext from '../../context/MoviesContext';
import images from '../../images-svg/imagesSvg';
import styled, { keyframes } from 'styled-components';
const titleAnimation = keyframes`
	from {
		opacity:20%;
        margin-top: 150px;
	}
    to {
		opacity: 100%;
        margin-top: 0;
	}
`;
const NextPreviewContainer = styled.article`
	position: absolute;
	display: flex;
	right: 0;
	top: 25%;
	z-index: 30;
	width: 30%;
	height: 50%;
	.left {
		width: 100%;
		padding: 5px 10px 5px 30px;
		background-color: #ffe;
		color: var(--black);
		font-family: Sarabun;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: left;
		h4 {
			font-size: 20px;
			text-transform: uppercase;
			font-weight: 600;
			color: #00000085;
			cursor: pointer;
			width: max-content;
			position: relative;
		}
		h3 {
			width: 100%;
			font-size: 35px;
			font-weight: 800;
			color: #001;
			animation: ${titleAnimation} 1.5s;
		}
		.next-preview-arrow {
			filter: invert();
			max-width: 35px;
			height: auto;
			cursor: pointer;
		}
	}
	.right {
		width: 80%;
		position: relative;
		height: auto;
		img {
			position: absolute;
			object-fit: none;
			height: 100%;
		}
	}
`;
export default function KalliPreview() {
	const { next, selectedNextMoviePreview } = useContext(MoviesContext);

	return (
		<NextPreviewContainer>
			<div className="left">
				<h4 className="underline">Up Next</h4>
				<h3>{selectedNextMoviePreview.title}</h3>
				<img
					onClick={next}
					className="next-preview-arrow"
					src={images.right}
					alt="right arrow"
				/>
			</div>
			<div className="right">
				<img
					src={require(`../../images-2/${selectedNextMoviePreview.img}`)}
					alt={selectedNextMoviePreview.title}
				/>
			</div>
		</NextPreviewContainer>
	);
}
