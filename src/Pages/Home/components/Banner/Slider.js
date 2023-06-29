import React from 'react';
import styled from 'styled-components';
import { IMAGE_URL } from 'Consts/URL';

import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useNavigate } from 'react-router-dom';

const IMG_BASE_URL = IMAGE_URL(1280);

const MovieSlider = ({ data }) => {
	const navigate = useNavigate();
	const top4 = data?.data.results.slice(0, 4) || [];

	return (
		<S.Wrapper>
			<S.SwiperWrapper>
				<Swiper
					className="mySwiper"
					slidesPerView={1.0}
					spaceBetween={0}
					loop={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Autoplay]}
					autoplay={{ delay: 2500, disableOnInteraction: false }}
				>
					{top4.map((src, index) => {
						return (
							<S.StyledSwiper key={src.id}>
								<SwiperSlide onClick={() => navigate(`/detail/${src.id}`)}>
									<SlideContent>
										<Title>{src.title}</Title>
										<Overview>{src.overview}</Overview>
									</SlideContent>
									<SlideImage
										src={`${IMG_BASE_URL}/${src.backdrop_path}`}
										alt={src.title}
									/>
								</SwiperSlide>
							</S.StyledSwiper>
						);
					})}
				</Swiper>
			</S.SwiperWrapper>
		</S.Wrapper>
	);
};

export default MovieSlider;

const Wrapper = styled.div`
	width: 100%;
	background-color: black;
	padding-top: 50px;
	& > div {
		overflow: hidden;
	}
`;

const SwiperWrapper = styled.div`
	margin: 0 auto;
	padding: 0px 20px;
`;

const StyledSwiper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const SlideContent = styled.div`
	cursor: pointer;
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	display: flex;
	flex-direction: column;
	padding: 15% 10%;
	color: white;
	@media (max-width: 410px) {
		padding: 10%;
	}
`;

const Title = styled.div`
	width: 100%;
	font-size: 2rem;
	font-weight: bolder;
	margin-bottom: 20px;
	background-color: none;
	@media (max-width: 850px) {
		font-size: 1.7rem;
	}
	@media (max-width: 600px) {
		font-size: 1.2rem;
	}
	@media (max-width: 410px) {
		font-size: 1rem;
	}
`;

const Overview = styled.p`
	width: 50%;
	font-size: 1.4rem;
	font-weight: lighter;
	line-height: 30px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 6;
	-webkit-box-orient: vertical;
	@media (max-width: 850px) {
		font-size: 1rem;
		line-height: 20px;
		-webkit-line-clamp: 5;
	}
	@media (max-width: 600px) {
		font-size: 0.8rem;
		line-height: 15px;
		-webkit-line-clamp: 4;
	}
	@media (max-width: 410px) {
		font-size: 0.6rem;
	}
`;

const SlideImage = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
`;

export const S = {
	Wrapper,
	SwiperWrapper,
	StyledSwiper,
};
