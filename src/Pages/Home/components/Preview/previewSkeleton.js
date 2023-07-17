import { Skeleton } from '@mui/material';

import styled from 'styled-components';
import { flexSpaceBetween } from 'Styles/common';

const PreviewSkeleton = ({ word }) => {
	const fake = new Array(4).fill(0);

	return (
		<S.Wrapper>
			<S.Bar>
				<span style={{ color: 'white' }}>{word}</span>
				<S.Button>MORE &gt;</S.Button>
			</S.Bar>
			<S.Cards>
				{fake.map(() => (
					<Skeleton
						sx={{
							width: 230,
							height: 300,
							bgcolor: 'grey.500',
							marginRight: '10px',
							marginLeft: '10px',
							my: '10px',
						}}
						variant="rectangular"
						animation="wave"
					/>
				))}
			</S.Cards>
		</S.Wrapper>
	);
};

export default PreviewSkeleton;

const Wrapper = styled.div`
	width: 100%;
	min-width: 350px;
	max-width: 1200px;
	margin: 0 auto;
	background-color: black;
`;

const Bar = styled.div`
	width: 100%;
	${flexSpaceBetween}
	padding: 5px 10px;
	font-size: 30px;
	> button {
		border: none;
		padding: 10px 15px;
		border-radius: 10px;
		font-size: 30px;
		@media (max-width: 850px) {
			font-size: 25px;
		}
		@media (max-width: 550px) {
			font-size: 18px;
		}
	}
	@media (max-width: 850px) {
		font-size: 25px;
	}
	@media (max-width: 550px) {
		font-size: 18px;
	}
`;

const Button = styled.button`
	font-size: 20px;
	color: white;
	background: none;
`;

const Cards = styled.div`
	${flexSpaceBetween}
	padding-bottom: 50px;
`;

const S = {
	Wrapper,
	Bar,
	Button,
	Cards,
};
