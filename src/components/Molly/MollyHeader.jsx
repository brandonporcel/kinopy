import React from 'react';
import images from '../../images-svg/imagesSvg';
import styled from 'styled-components';
const Container = styled.header`
	.menu {
		height: 35px;
		width: 35px;
		cursor: pointer;
	}
	.searcher {
		cursor: pointer;
		height: 20px;
		width: 20px;
	}
`;
export default function MollyHeader() {
	return (
		<Container className="sides-p">
			<div className="menu">
				<img src={images.menu} alt="" />
			</div>
			<h1 className="j-center">molly</h1>
			<div className="searcher j-end">
				<img src={images.search} alt="" />
			</div>
		</Container>
	);
}
