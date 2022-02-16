import React, { useContext } from 'react';
import styled from 'styled-components';
import MoviesContext from '../../context/MoviesContext';
import images from '../../images-svg/imagesSvg';

const FooterContainer = styled.footer`
	font-family: Sarabun;

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
		.slider-line {
			opacity: 0.4;
			&.active {
				opacity: 1;
			}
		}
	}
`;
export default function KalliFooter() {
	const { postersIndex, movies, selectedMovie, previous, next } =
		useContext(MoviesContext);

	return (
		<FooterContainer className="sides-p">
			<p className="read-more-p">read more</p>
			<p className="j-center">
				<i>{selectedMovie.name}</i>
			</p>
			<div className="footer-slider j-end">
				<div className="slider-state-ctn">
					<span>01</span>
					<div className="lines-ctn">
						{movies.map((el, i) => {
							return (
								<img
									key={i}
									data-index={i}
									className={
										postersIndex === i ? 'slider-line active' : 'slider-line'
									}
									src={images.line}
									alt="line"
								/>
							);
						})}
					</div>
					<span>03</span>
				</div>
				<div className="next-prev">
					<img
						className="arrow"
						onClick={previous}
						src={images.left}
						alt="left arrow"
					/>
					<img
						className="arrow"
						onClick={next}
						src={images.right}
						alt="right arrow"
					/>
				</div>
			</div>
		</FooterContainer>
	);
}