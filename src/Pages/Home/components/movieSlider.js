import MovieSlider from './Banner/Slider';
import { usePopular } from 'hooks/queries/get-movie-infos';
import styled from 'styled-components';
import MovieSliderSkeleton from './Banner/SliderSkeleton';

const MoviePreviewSlider = () => {
	const { popular } = usePopular();

	return (
		<Wrapper>
			{popular ? <MovieSlider data={popular} /> : <MovieSliderSkeleton />}
		</Wrapper>
	);
};

export default MoviePreviewSlider;

const Wrapper = styled.div`
	background-color: black;
	padding-bottom: 100px;
`;
