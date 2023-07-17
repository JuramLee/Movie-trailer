import styled from 'styled-components';
import SearchSkeleton from './components/searchSkeleton';
import SearchedMovies from './components/searchedMovies';
import { useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useInfiniteSearch } from 'hooks/queries/get-infinite-movieList';
import SearchBar from 'components/search';

function SearchPage() {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const [ref, inView] = useInView();
	const word = searchParams.get('word');
	const { searchResults, isLoading, isFetchingNextPage, fetchNextPage } =
		useInfiniteSearch(word);

	const blank = new Array(3).fill(0);

	useEffect(() => {
		if (!inView) {
			return;
		}
		fetchNextPage();
	}, [inView]);

	return (
		<Wrapper>
			<Container>
				<SearchBar />
				{searchResults && searchResults.pages[0].data.results.length === 0 ? (
					<Result>No result of "{word}"</Result>
				) : (
					<Result>Search results of "{word}"</Result>
				)}
				{!isLoading
					? searchResults &&
					  searchResults.pages.map(
							page =>
								page &&
								page.data.results.map(movie => (
									<SearchedMovies key={movie.id} movie={movie} />
								)),
					  )
					: blank.map(() => <SearchSkeleton />)}
				{isFetchingNextPage ? blank.map(() => <SearchSkeleton />) : ''}
				<div ref={ref}></div>
			</Container>
		</Wrapper>
	);
}

export default SearchPage;

const Wrapper = styled.div`
	background-color: black;
`;

const Container = styled.div`
	width: 80%;
	min-width: 350px;
	margin: 0 auto;
	background-color: black;
	padding: 20px 50px;
	cursor: pointer;
	> span {
		color: white;
		font-size: 30px;
	}
	@media (max-width: 810px) {
		width: 95%;
	}
`;

const Result = styled.div`
	color: white;
	font-size: 25px;
	margin-top: 50px;
	padding-top: 50px;
	border-top: 1px solid white;
	@media (max-width: 768px) {
		font-size: 20px;
		margin-top: 30px;
		padding-top: 30px;
	}
	@media (max-width: 500px) {
		font-size: 15px;
		margin-top: 15px;
		padding-top: 15px;
	}
`;
