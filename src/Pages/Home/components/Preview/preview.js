import MovieCard from 'components/Card/Card';
import { useNavigate } from 'react-router';

import styled from 'styled-components';
import { flexSpaceBetween } from 'Styles/common';

const Preview = ({ data, word, nav, isLoading }) => {
	const navigate = useNavigate();
	const top4 = data && data.data.results.slice(0, 4);

	return (
		<S.Wrapper>
			<S.Bar>
				<span style={{ color: 'white', fontSize: '30px' }}>{word}</span>
				<S.Button onClick={() => navigate(`/movie/${nav}`)}>MORE &gt;</S.Button>
			</S.Bar>
			<S.Cards>
				{top4 ? (
					top4.map(item => <MovieCard movie={item} key={item.id} />)
				) : (
					<Skeleton variant="rectangular" width={'1200px'} height={'450px'} />
				)}
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
	border: 1px solid red;
`;

const Bar = styled.div`
	width: 100%;
	${flexSpaceBetween}
	padding: 5px 10px;
	> button {
		border: none;
		padding: 10px 15px;
		border-radius: 10px;
	}
`;

const Button = styled.button`
	font-size: 20px;
	color: white;
	background: none;
	:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

const Cards = styled.div`
	${flexSpaceBetween}
	padding-bottom: 50px;
	/* gap: 10px; */
`;

const S = {
	Wrapper,
	Bar,
	Button,
	Cards,
};
