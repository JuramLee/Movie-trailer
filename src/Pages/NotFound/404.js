import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

function NotFoundPage() {
	const navigate = useNavigate();

	return (
		<BG>
			<img src="/Assets/paw.png"></img>
			<h2>Something's wrong here. </h2>
			<span>
				This is 404 error, which means you've clicked on a bad link or entered
				invalid URL.
			</span>
			<ButtonBox>
				<GoMain onClick={() => navigate(-1)}>Go back to home</GoMain>
			</ButtonBox>
		</BG>
	);
}

export default NotFoundPage;

const BG = styled.div`
	min-width: 350px;
	max-width: 1200px;
	@media (max-width: 700px) {
		width: 95%;
		padding: 20px 0;
	}
	@media (max-width: 900px) {
		width: 90%;
		padding: 20px 0;
	}
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	justify-content: center;
	img {
		padding-top: 200px;
		max-width: 200px;
	}
	h2 {
		margin-top: 30px;
		font-size: 40px;
		font-weight: 700;
	}
	span {
		margin: 20px;
		font-size: 30px;
	}
`;

const ButtonBox = styled.div`
	width: 50%;
	margin: 0 auto;
	padding: 10px;
	display: flex;
	justify-content: center;
	border-radius: 15px;
`;

const GoMain = styled(Link)`
	color: black;
	font-weight: 700;
	text-decoration: none;
	background-color: lightgray;
	padding: 20px;
	border-radius: 10px;
	:hover {
		background-color: red;
		color: white;
	}
`;
