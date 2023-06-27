import { IMAGE_URL } from 'Consts/URL';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const IMG_BASE_URL = IMAGE_URL(1280);

function MovieCard({ movie }) {
	const navigate = useNavigate();
	const [flip, setFlip] = useState(false);

	return (
		<S.Wrapper
			onClick={() => navigate(`/detail/${movie.id}`)}
			onMouseOver={() => setFlip(true)}
			onMouseOut={() => setFlip(false)}
		>
			<S.Container>
				<ReactCardFlip isFlipped={flip} flipDirection="horizontal">
					<S.MoviePoster
						src={
							movie.poster_path
								? IMG_BASE_URL + movie.poster_path
								: '/Assets/backdrop.png'
						}
					/>
					<S.MovieInfo>
						<div>
							<S.MovieTitle>{movie.title}</S.MovieTitle>
							<S.Rating>⭐{movie.vote_average}</S.Rating>
						</div>
						<S.OverviewText>{movie.overview}</S.OverviewText>
					</S.MovieInfo>
				</ReactCardFlip>
			</S.Container>
		</S.Wrapper>
	);
}

export default MovieCard;

const Wrapper = styled.div`
	display: flex;
	flex: 1;
`;

const Container = styled.div`
	cursor: pointer;
	width: 180px;
	height: 250px;
	margin: 5px;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	@media (max-width: 1024px) {
		width: 160px;
		height: 200px;
	}
	@media (max-width: 900px) {
		width: 150px;
		height: 190px;
	}
	@media (max-width: 768px) {
		width: 120px;
		height: 180px;
	}
	@media (max-width: 650px) {
		width: 100px;
		height: 180px;
	}
	@media (max-width: 500px) {
		width: 80px;
		height: 170px;
	}
	@media (max-width: 400px) {
		width: 70px;
		height: 140px;
	}
	@media (max-width: 350px) {
		width: 50px;
		height: 100px;
	}
`;

const MoviePoster = styled.img`
	width: 100%;
	height: 350px;
	object-fit: fill;
	@media (max-width: 1024px) {
		height: 200px;
	}
	@media (max-width: 768px) {
		height: 200px;
	}
	@media (max-width: 500px) {
		height: 180px;
	}
	@media (max-width: 350px) {
		height: 120px;
	}
`;

const MovieInfo = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	height: 350px;
	width: 100%;
	background-color: black;
	color: white;
	/* border: 1px solid #262626; */
	@media (max-width: 768px) {
		padding: 20px 10px;
	}
	& div {
		display: flex;
		flex-direction: column;
		@media (max-width: 768px) {
			margin-bottom: 10px;
		}
	}
`;

const MovieTitle = styled.h3`
	font-size: 22px;
	font-weight: bolder;
	margin-bottom: 10px;
	@media (max-width: 1000px) {
		font-size: 18px;
	}
	@media (max-width: 768px) {
		font-size: 12px;
	}
`;

const Rating = styled.span`
	background-color: #ff1300;
	color: white;
	width: 52px;
	text-align: left;
	padding: 5px;
	border-radius: 5px;
	font-size: 15px;
	font-weight: bold;
	@media (max-width: 768px) {
		width: 40px;
		font-size: 10px;
	}
`;

const OverviewText = styled.span`
	font-size: 18px;
	font-weight: lighter;
	line-height: 30px;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-top: 25px;
	display: -webkit-box;
	color: #d1d1d1;
	-webkit-line-clamp: 7;
	-webkit-box-orient: vertical;
	@media (max-width: 1000px) {
		font-size: 15px;
		line-height: 20px;
		-webkit-line-clamp: 4;
	}
	@media (max-width: 768px) {
		font-size: 10px;
		line-height: 15px;
		-webkit-line-clamp: 4;
	}
`;

const S = {
	Wrapper,
	Container,
	MoviePoster,
	MovieInfo,
	MovieTitle,
	Rating,
	OverviewText,
};
