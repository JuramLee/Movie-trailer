import MovieCard from 'components/Card/Card';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

import styled from 'styled-components';
import { flexSpaceBetween } from 'Styles/common';

const Preview = ({ data, word, nav }) => {
	const navigate = useNavigate();
	const top4 = data?.data.results.slice(0, 4);

	return (
		<S.Wrapper>
			<S.Bar>
				<span style={{ color: 'white' }}>{word}</span>
				<S.Button
					as={motion.button}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 1 }}
					onClick={() => navigate(`/movie/${nav}`)}
				>
					MORE &gt;
				</S.Button>
			</S.Bar>
			<S.Cards>
				{top4.map(item => (
					<MovieCard movie={item} key={item.id} />
				))}
			</S.Cards>
		</S.Wrapper>
	);
};

export default Preview;

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

const Button = styled(motion.button)`
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
