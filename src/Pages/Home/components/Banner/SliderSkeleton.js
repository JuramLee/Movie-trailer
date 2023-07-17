import React from 'react';
import styled from 'styled-components';
import { Skeleton } from '@mui/material';

const MovieSliderSkeleton = () => {
	return (
		<S.Wrapper>
			<S.SwiperWrapper>
				<Skeleton
					width={1100}
					height={660}
					sx={{
						bgcolor: 'grey.500',
						marginRight: '10px',
						marginLeft: '10px',
						my: '10px',
					}}
					variant="rectangular"
					animation="wave"
				/>
			</S.SwiperWrapper>
		</S.Wrapper>
	);
};

export default MovieSliderSkeleton;

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

export const S = {
	Wrapper,
	SwiperWrapper,
};
