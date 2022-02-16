import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterTag = styled.footer`
	padding: 20px 0;
	text-align: center;
	h2 {
		background: white;
		padding: 5px 0;
		margin: 10px 0;
	}
	div {
		text-align: center;

		ul > li {
			display: inline-block;
			margin: 0 5px;
			color: #eee;
		}
	}
`;
export default function Footer() {
	return (
		<FooterTag>
			<h2>
				<Link to="/kalli"> Check 2nd Part </Link>
			</h2>
			<div>
				<ul>
					<li>
						<a href="#1">1</a>
					</li>
					<li>
						<a href="#2">2</a>
					</li>
					<li>
						<a href="#3">3</a>
					</li>
					<li>
						<a href="#4">4</a>
					</li>
				</ul>
			</div>
		</FooterTag>
	);
}
