import ScrollUpBtn from 'components/Layout/ScrollUp/scrollup';
import styled from 'styled-components';
import Preview from './Preview/preview';
import {
	useNowPlaying,
	useTopRated,
	useUpComing,
} from 'hooks/queries/get-movie-infos';

const MoviePreviewCard = () => {
	const { nowPlaying } = useNowPlaying(1);
	const { topRated } = useTopRated(1);
	const { upComing } = useUpComing(1);

	return (
		<Wrapper>
			{nowPlaying && (
				<Preview data={nowPlaying} word={'Now Playing'} nav={'now_playing'} />
			)}
			{topRated && (
				<Preview data={topRated} word={'Top Rated'} nav={'top_rated'} />
			)}
			{upComing && (
				<Preview data={upComing} word={'Up coming'} nav={'upcoming'} />
			)}
			<ScrollUpBtn />
		</Wrapper>
	);
};

export default MoviePreviewCard;

const Wrapper = styled.div`
	background-color: black;
`;
