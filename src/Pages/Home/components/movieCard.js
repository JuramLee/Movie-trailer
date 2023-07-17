import styled from 'styled-components';
import Preview from './Preview/preview';
import {
	useNowPlaying,
	useTopRated,
	useUpComing,
} from 'hooks/queries/get-movie-infos';
import PreviewSkeleton from './Preview/previewSkeleton';

const MoviePreviewCard = () => {
	const { nowPlaying, isLoading: nowLoading } = useNowPlaying(1);
	const { topRated, isLoading: topLoading } = useTopRated(1);
	const { upComing, isLoading: upLoading } = useUpComing(1);

	return (
		<Wrapper>
			{nowLoading ? (
				<PreviewSkeleton word={'Now Playing'} />
			) : (
				<Preview data={nowPlaying} word={'Now Playing'} nav={'now_playing'} />
			)}
			{topLoading ? (
				<PreviewSkeleton word={'Top Rated'} />
			) : (
				<Preview data={topRated} word={'Top Rated'} nav={'top_rated'} />
			)}
			{upLoading ? (
				<PreviewSkeleton word={'Up coming'} />
			) : (
				<Preview data={upComing} word={'Up coming'} nav={'upcoming'} />
			)}
		</Wrapper>
	);
};

export default MoviePreviewCard;

const Wrapper = styled.div`
	background-color: black;
`;
