import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexAlignCenter } from 'Styles/common';
import { IMAGE_URL } from 'Consts/URL';

function SearchedMovies({ movie }) {
	const IMG_BASE_URL = IMAGE_URL(300);
	const navigate = useNavigate();
	const goDetail = () => {
		navigate(`/detail/${movie.id}`);
	};

	let score;
	if (movie.vote_average !== 0) {
		score = `⭐${movie.vote_average.toFixed(1)}`;
	} else {
		const releaseDate = new Date(movie.release_date);
		const currentDate = new Date();
		if (releaseDate > currentDate) {
			score = `It will be released on ${movie.release_date}`;
		} else {
			score = 'Sorry, there are not enough rating data yet';
		}
	}

	return (
		<Wrapper onClick={goDetail}>
			<Poster>
				{movie.poster_path ? (
					<img
						src={IMG_BASE_URL + movie.poster_path}
						alt="포스터"
						width="100%"
						height="100%"
					/>
				) : (
					<img
						src="/Assets/backdrop.png"
						alt="포스터 없음"
						width="100%"
						height="100%"
					/>
				)}
			</Poster>
			<Info>
				<Top>
					<Title>{movie.title}</Title>
					<Score>{score}</Score>
				</Top>
				<Preview> {movie.overview}</Preview>
			</Info>
		</Wrapper>
	);
}
export default SearchedMovies;

const Wrapper = styled.div`
	color: white;
	background-color: black;
	list-style: none;
	margin: 0;
	padding: 30px;
	border: 1px double grey;
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 30px;
	min-width: 260px;
`;

const Poster = styled.div`
	width: 230px;
	height: 300px;
	min-width: 80px;
	margin-right: 20px;
	@media (max-width: 1500px) {
		width: 210px;
		height: 290px;
	}
	@media (max-width: 1500px) {
		width: 210px;
		height: 260px;
	}
	@media (max-width: 1000px) {
		width: 210px;
		height: 230px;
	}
	@media (max-width: 900px) {
		width: 190px;
		height: 210px;
	}
	@media (max-width: 810px) {
		width: 190px;
		height: 200px;
	}
	@media (max-width: 750px) {
		width: 150px;
		height: 160px;
	}
	@media (max-width: 680px) {
		width: 110px;
		height: 120px;
	}
`;

const Info = styled.div`
	width: 80%;
	/* height: 100%; */
	/* padding: 50px; */
`;

const Top = styled.div`
	${flexAlignCenter}
	margin-bottom: 20px;
	@media (max-width: 680px) {
		margin-bottom: 5px;
	}
`;

const Title = styled.div`
	width: 100%;
	min-width: 30px;
	font-weight: 900;
	font-size: 30px;
	margin-right: 20px;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	@media (max-width: 1300px) {
		font-weight: 800;
		font-size: 25px;
	}
	@media (max-width: 1000px) {
		font-weight: 700;
		font-size: 20px;
	}
	@media (max-width: 680px) {
		font-weight: 700;
		font-size: 15px;
	}
`;

const Preview = styled.div`
	width: 100%;
	font-size: 20px;
	line-height: 30px;
	font-weight: lighter;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	@media (max-width: 1300px) {
		font-size: 18px;
		line-height: 25px;
	}
	@media (max-width: 1000px) {
		font-size: 16px;
		line-height: 23px;
	}
	@media (max-width: 800px) {
		font-size: 14px;
		line-height: 20px;
	}
	@media (max-width: 680px) {
		font-size: 10px;
		line-height: 15px;
	}
`;

const Score = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	@media (max-width: 700px) {
		font-size: 0.8rem;
	}
	@media (max-width: 540px) {
		font-size: 0.4rem;
	}
	@media (max-width: 485px) {
		font-size: 0.3rem;
	}
`;
