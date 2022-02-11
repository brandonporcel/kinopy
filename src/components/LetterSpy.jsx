import React from 'react';
import styled from 'styled-components';
const LetterSpyCtn = styled.div`
	position: fixed;
	top: 10px;
	right: 10px;
	height: 30px;
	width: 50px;
	border-radius: 50px;
	background-color: #222;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export default function LetterSpy({ spyLetterRef }) {
	return (
		<LetterSpyCtn>
			<span ref={spyLetterRef}>S</span>
		</LetterSpyCtn>
	);
}
