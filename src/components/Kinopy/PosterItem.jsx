import React from 'react';
import styled from 'styled-components';
const PosterItemWrapper = styled.section`
	height: 100vh;
	padding-top: 50px;
	.poster-item-container {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		.poster-cover-container {
			height: 525px;
			width: 375px;
			margin-bottom: 20px;
			position: relative;
			box-shadow: 0px 0px 20px 5px var(--black);
			img {
				position: absolute;
				object-fit: cover;
				height: 100%;
			}
			.stamp {
				position: absolute;
				right: -35px;
				top: 40px;
				height: 75px;
				width: 75px;
				border-radius: 50px;
				z-index: 10;
				display: flex;
				align-items: center;
				justify-content: center;
				background: var(--white);
				color: var(--black);

				span {
					font-size: 18px;
				}
			}
		}
		.poster-info-container {
			text-align: center;
			h3 {
				color: #eee;
				font-weight: 400;
				margin-bottom: 5px;
			}
			p {
				color: #222;
			}
		}
	}
	@media screen and (max-width: 600px) {
		padding-top: 100px;
		.poster-item-container {
			.poster-cover-container {
				width: 350px;
				.stamp {
					width: 50px;
					height: 50px;
					right: -20px;
					span {
						font-size: 12px;
					}
				}
			}
		}
	}
`;
export default function PosterItem({ id, background, title, poster }) {
	return (
		<PosterItemWrapper
			id={id}
			data-id={id}
			data-color={background}
			data-title={title}
			className="poster-item-wrapper"
			key={id}
		>
			<div className="poster-item-container">
				<div className="poster-cover-container">
					<div className="stamp">
						<span>Poster {id}</span>
					</div>
					<img src={require(`../../images/${poster}`)} alt={title} />
				</div>
				<div className="poster-info-container">
					<h3>{title}</h3>
					<p>Watch It</p>
				</div>
			</div>
		</PosterItemWrapper>
	);
}
