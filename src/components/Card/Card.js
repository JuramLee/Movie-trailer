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
	margin-bottom: 10px;
`;

const Container = styled.div`
	cursor: pointer;
	width: 250px;
	height: 350px;
	margin: 5px;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	@media (max-width: 1024px) {
		width: 210px;
		height: 300px;
	}
	@media (max-width: 900px) {
		width: 180px;
		height: 250px;
	}
	@media (max-width: 850px) {
		width: 160px;
		height: 220px;
	}
	@media (max-width: 770px) {
		width: 140px;
		height: 190px;
	}
	@media (max-width: 680px) {
		width: 130px;
		height: 160px;
	}
	@media (max-width: 640px) {
		width: 120px;
		height: 140px;
	}
	@media (max-width: 590px) {
		width: 110px;
		height: 130px;
	}
	@media (max-width: 540px) {
		width: 95px;
		height: 120px;
	}
	@media (max-width: 490px) {
		width: 80px;
		height: 110px;
	}
	@media (max-width: 415px) {
		width: 70px;
		height: 90px;
	}
`;

const MoviePoster = styled.img`
	width: 100%;
	height: 350px;
	object-fit: fill;
	@media (max-width: 1024px) {
		height: 300px;
	}
	@media (max-width: 900px) {
		height: 250px;
	}
	@media (max-width: 850px) {
		height: 220px;
	}
	@media (max-width: 770px) {
		height: 190px;
	}
	@media (max-width: 680px) {
		height: 160px;
	}
	@media (max-width: 640px) {
		height: 140px;
	}
	@media (max-width: 590px) {
		height: 130px;
	}
	@media (max-width: 540px) {
		height: 120px;
	}
	@media (max-width: 490px) {
		height: 110px;
	}
	@media (max-width: 415px) {
		height: 90px;
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
	& div {
		display: flex;
		flex-direction: column;
	}
	@media (max-width: 1024px) {
		height: 300px;
	}
	@media (max-width: 900px) {
		height: 250px;
		padding: 15px;
	}
	@media (max-width: 850px) {
		height: 220px;
	}
	@media (max-width: 770px) {
		height: 190px;
	}
	@media (max-width: 680px) {
		height: 160px;
		padding: 11px;
	}
	@media (max-width: 640px) {
		height: 140px;
	}
	@media (max-width: 590px) {
		height: 130px;
		padding: 8px;
	}
	@media (max-width: 540px) {
		height: 120px;
	}
	@media (max-width: 490px) {
		height: 110px;
	}
	@media (max-width: 415px) {
		height: 90px;
		padding: 5px;
	}
`;

const MovieTitle = styled.h3`
	font-size: 22px;
	font-weight: bolder;
	margin-bottom: 10px;
	@media (max-width: 1024px) {
		font-size: 18px;
	}
	@media (max-width: 850px) {
		font-size: 15px;
	}
	@media (max-width: 770px) {
		font-size: 13px;
	}
	@media (max-width: 640px) {
		font-size: 11px;
		margin-bottom: 6px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		width: 100px;
	}
	@media (max-width: 590px) {
		font-size: 8px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		width: 90px;
	}
	@media (max-width: 490px) {
		width: 65px;
		font-size: 5px;
	}
	@media (max-width: 415px) {
		font-size: 4px;
		-webkit-line-clamp: 1;
		width: 50px;
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
	@media (max-width: 600px) {
		font-size: 5px;
		padding: 3px;
		width: 35px;
	}
	@media (max-width: 490px) {
		font-size: 4px;
		padding: 2px;
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
		margin-top: 15px;
	}
	@media (max-width: 640px) {
		font-size: 9px;
		line-height: 10px;
	}
	@media (max-width: 490px) {
		font-size: 5px;
		margin-top: 5px;
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
