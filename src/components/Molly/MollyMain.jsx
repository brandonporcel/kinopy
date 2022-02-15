import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import MoviesContext from '../../context/MoviesContext';
import images from '../../images-svg/imagesSvg';
const MainContainer = styled.main`
	height: 100%;
	.background-container {
		height: 100%;
		opacity: 90%;
		position: absolute;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 5;
		width: 100vw;
		overflow: hidden;
		user-select: none;
		img {
			opacity: 0.9;
		}
	}

	.background-title {
		width: 60%;
		height: 40%;
		position: absolute;
		top: 40%;
		margin-left: 100px;
		overflow: hidden;
		z-index: 20;
		h2 {
			font-size: 52px;
			font-family: Sarabun;
			font-weight: 800;
			color: #fff;
			padding: 10px;
			line-height: 1;
		}
	}
	.next-preview-container {
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
			}
			h3 {
				width: 100%;
				font-size: 35px;
				font-weight: 800;
				color: #001;
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
				object-fit: cover;
				height: 100%;
			}
		}
	}
`;

export default function MollyMain() {
	const { selectedMovie, next, selectedNextMoviePreview } =
		useContext(MoviesContext);
	return (
		<MainContainer>
			<div className="background-container">
				<img src={selectedMovie.img} alt="" />
			</div>

			<div className="background-title">
				<h2>{selectedMovie.phrase}</h2>
			</div>
			<div className="next-preview-container">
				<div className="left">
					<h4>Up Next</h4>
					<h3>{selectedNextMoviePreview.title}</h3>
					<img
						onClick={next}
						className="next-preview-arrow"
						src={images.right}
						alt="right arrow"
					/>
				</div>
				<div className="right">
					<img src={selectedNextMoviePreview.img} alt="" />
				</div>
			</div>
		</MainContainer>
	);
}
