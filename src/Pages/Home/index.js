import styled from 'styled-components';
import MoviePreviewCard from './components/movieCard';
import MoviePreviewSlider from './components/movieSlider';

const HomePage = () => {
	return (
		<Wrapper>
			<MoviePreviewSlider />
			<MoviePreviewCard />
		</Wrapper>
	);
};

export default HomePage;

const Wrapper = styled.div`
	min-width: 350px;
	max-width: 1200px;
	@media (max-width: 700px) {
		width: 95%;
		padding: 20px 0;
	}
	@media (max-width: 900px) {
		width: 90%;
		padding: 20px 0;
	}
	margin: 0 auto;
`;
