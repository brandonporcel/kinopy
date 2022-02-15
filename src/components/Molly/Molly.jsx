import React from 'react';
import styled from 'styled-components';
import { MoviesProvider } from '../../context/MoviesContext';
import MollyFooter from './MollyFooter';
import MollyHeader from './MollyHeader';
import MollyMain from './MollyMain';
const Wrapper = styled.div`
	.sides-p {
		padding: 25px 50px;
	}

	overflow: hidden;
	display: grid;
	grid-template-rows: 90px 1fr 90px;
	height: 100vh;
	background: var(--black-molly);
	color: var(--white);
	header,
	footer {
		z-index: 20;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;
	}
`;

export default function Molly() {
	return (
		<MoviesProvider>
			<Wrapper>
				<MollyHeader />
				<MollyMain />
				<MollyFooter />
			</Wrapper>
		</MoviesProvider>
	);
}
