import React from 'react';
import styled from 'styled-components';
import { MoviesProvider } from '../../context/MoviesContext';
import KalliFooter from './KalliFooter';
import KalliHeader from './KalliHeader';
import KalliMain from './KalliMain';
const Wrapper = styled.div`
	.sides-p {
		padding: 25px 50px;
	}

	overflow: hidden;
	display: grid;
	grid-template-rows: 90px 1fr 90px;
	height: 100vh;
	background: #000;
	color: var(--white);
	header,
	footer {
		z-index: 20;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;
	}
	.underline {
		&:before {
			content: '';
			display: block;
			width: 0;
			height: 3px;
			background: #00000085;
			position: absolute;
			bottom: 0;
			transition: width 0.5s;
		}
		&:hover:before {
			width: 100%;
		}
	}
	@media screen and (max-width: 600px) {
		.sides-p {
			padding: 25px;
		}
	}
`;

export default function Kalli() {
	return (
		<MoviesProvider>
			<Wrapper>
				<KalliHeader />
				<KalliMain />
				<KalliFooter />
			</Wrapper>
		</MoviesProvider>
	);
}
