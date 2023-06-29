import { VIDEO_URL } from 'Consts/URL';
import { useVideo } from 'hooks/queries/get-movie-infos';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

function DetailVideo({ id }) {
	const { data: video } = useVideo(id);
	const data2 = video && video.data;

	const videoId = data2?.results[0] ? data2.results[0].key : null;
	const videoKeys = [];
	data2 && data2.results.map(video => videoKeys.push(video.key));

	return (
		data2 && (
			<>
				{videoId ? (
					<Swiper
						className="mySwiper"
						slidesPerView={2}
						spaceBetween={0}
						pagination={{
							clickable: true,
						}}
						scrollbar={{
							el: '.scroll',
							clickable: true,
						}}
						modules={[Pagination]}
					>
						{videoKeys.map(key => (
							<SwiperSlide>
								<S.Iframe width="100%" height="100%" src={VIDEO_URL(key)} />
								<div className="scroll"></div>
							</SwiperSlide>
						))}
					</Swiper>
				) : (
					<div>No videos</div>
				)}
			</>
		)
	);
}

export default DetailVideo;

const Iframe = styled.iframe`
	width: 100vw;
	height: 600px;
`;

const S = {
	Iframe,
};
