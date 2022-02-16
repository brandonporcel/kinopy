import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import MoviesContext from '../../context/MoviesContext';

import KalliPreview from './KalliPreview';
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
		height: 25%;
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
			animation: ${titleAnimation} 2s;
		}
	}
	@media screen and (max-width: 600px) {
		.background-container {
			img {
				width: auto;
				height: 100%;
			}
		}
		.background-title {
			height: 20%;
			h2 {
				font-size: 30px;
			}
		}
	}
`;

export default function KalliMain() {
	const { selectedMovie } = useContext(MoviesContext);

	return (
		<MainContainer>
			<div className="background-container">
				<img
					src={require(`../../images/${selectedMovie.img}`)}
					alt={selectedMovie.name}
				/>
			</div>

			<div className="background-title">
				<h2>{selectedMovie.phrase}</h2>
			</div>
			<KalliPreview />
		</MainContainer>
	);
}
