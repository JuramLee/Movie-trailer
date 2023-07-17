import { Skeleton } from '@mui/material';
import styled from 'styled-components';

const SearchSkeleton = () => {
	return Array(3)
		.fill(0)
		.map(() => (
			<Wrapper>
				<Container>
					<Skeleton
						variant="rectangular"
						sx={{
							width: 200,
							height: 250,
							bgcolor: 'grey.500',
							marginRight: '15px',
						}}
						animation="wave"
					/>
				</Container>
				<Container>
					<Skeleton
						variant="rectangular"
						sx={{
							width: 300,
							height: 40,
							bgcolor: 'grey.500',
							marginBottom: '20px',
						}}
						animation="wave"
					/>
					<Skeleton
						variant="rectangular"
						sx={{
							width: 550,
							height: 120,
							bgcolor: 'grey.500',
							marginRight: '50px',
						}}
						animation="wave"
					/>
				</Container>
			</Wrapper>
		));
};
export default SearchSkeleton;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	border: 1px double grey;
	border-radius: 25px;
	margin-top: 30px;
	align-items: center;
	padding: 30px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
