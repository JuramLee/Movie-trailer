import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { queryConfig } from './@config';
import { QUERY_KEY } from 'Consts/queryKey';

export const usePopular = () => {
	const { data: popular, isLoading } = useQuery(
		[QUERY_KEY.POPULAR],
		() => MovieApi.getPopular(),
		queryConfig,
	);
	return { popular, isLoading };
};

export const useNowPlaying = nowPlayingLst => {
	const { data: nowPlaying, isLoading } = useQuery(
		[QUERY_KEY.NOW_PLAYING],
		() => MovieApi.getNowPlaying(nowPlayingLst),
		queryConfig,
	);
	return { nowPlaying, isLoading };
};

export const useTopRated = topRatedList => {
	const { data: topRated, isLoading } = useQuery(
		[QUERY_KEY.TOP_RATED],
		() => MovieApi.getTopRated(topRatedList),
		queryConfig,
	);
	return { topRated, isLoading };
};

export const useUpComing = upComingList => {
	const { data: upComing, isLoading } = useQuery(
		[QUERY_KEY.UP_COMING],
		() => MovieApi.getUpComing(upComingList),
		queryConfig,
	);
	return { upComing, isLoading };
};

export const useDetailInfo = movieId => {
	const { data, isLoading } = useQuery(
		[QUERY_KEY.GET_DETAIL],
		() => MovieApi.getDetailInfo(movieId),
		queryConfig,
	);
	return { data, isLoading };
};

export const useVideo = movieId => {
	const { data, isLoading } = useQuery(
		[QUERY_KEY.GET_VIDEO],
		() => MovieApi.getVideos(movieId),
		queryConfig,
	);
	return { data, isLoading };
};
