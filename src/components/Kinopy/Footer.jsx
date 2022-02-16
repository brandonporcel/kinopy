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
`;
export default function Footer() {
	return (
		<FooterTag>
			<h2>
				<Link to="/kalli"> Check 2nd Part </Link>
			</h2>
		</FooterTag>
	);
}
