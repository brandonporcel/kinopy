import React from 'react';
import styled from 'styled-components';
import images from '../../images-svg/imagesSvg';
const FooterContainer = styled.footer`
	font-family: Sarabun;

	.read-more-p {
		/* animation */
	}
	.footer-slider {
		display: flex;
		gap: 50px;
		align-items: center;
		.slider-state-ctn {
			align-items: center;
			display: flex;
			gap: 10px;
			.lines-ctn {
				display: flex;
			}
		}
		.next-prev {
			align-items: center;
			display: flex;
			gap: 5px;
		}
		.slider-line,
		.arrow {
			max-width: 20px;
			height: auto;
			margin: 1.5px;
			cursor: pointer;
		}
	}
`;
export default function MollyFooter() {
	return (
		<FooterContainer className="sides-p">
			<p className="read-more-p">read more</p>
			<p className="j-center">
				<i>dazed and confused</i>
			</p>
			<div className="footer-slider j-end">
				<div className="slider-state-ctn">
					<span>01</span>
					<div className="lines-ctn">
						<img className="slider-line" src={images.line} alt="line" />
						<img className="slider-line" src={images.line} alt="line" />
						<img className="slider-line" src={images.line} alt="line" />
					</div>
					<span>03</span>
				</div>
				<div className="next-prev">
					<img className="arrow" src={images.left} alt="left arrow" />
					<img className="arrow" src={images.right} alt="right arrow" />
				</div>
			</div>
		</FooterContainer>
	);
}
