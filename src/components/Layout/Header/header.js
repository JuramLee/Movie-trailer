import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const BasicHeader = () => {
	const navigate = useNavigate();

	return (
		<S.HeaderWrapper>
			<S.HeaderLogo onClick={() => navigate('/')}>
				<img src="/Assets/movie_cat_cha.png" />
			</S.HeaderLogo>
			<S.GlassBtn
				onClick={() => {
					navigate('/search');
				}}
			>
				<S.FontIcons
					icon={faMagnifyingGlass}
					color="darkgray"
					cursor="pointer"
					fontSize="25px"
				/>
			</S.GlassBtn>
			<S.IconContainer>
				<div key="now-playing" onClick={() => navigate('/movie/now_playing')}>
					Now Playing
				</div>
				<div key="top-rated" onClick={() => navigate('/movie/top_rated')}>
					Top Rated
				</div>
				<div key="upcoming" onClick={() => navigate('/movie/upcoming')}>
					Up Coming
				</div>
			</S.IconContainer>
		</S.HeaderWrapper>
	);
};

export default BasicHeader;

const HeaderWrapper = styled.div`
	min-width: 350px;
	max-width: 1200px;
	@media (max-width: 800px) {
		width: 95%;
		padding: 20px 0;
	}
	@media (max-width: 1000px) {
		width: 90%;
		padding: 20px 0;
	}
	margin: 0 auto;
	padding: 20px;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	position: relative;
`;

const HeaderLogo = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 20px;

	> img {
		cursor: pointer;
		max-width: 150px;
		width: 80%;
		flex: 5;
	}
	> span {
		width: 100%;
		margin-left: 20px;
	}
`;

const IconContainer = styled.div`
	display: flex;
	font-size: 21px;
	font-weight: 700;
	width: 100%;
	justify-items: center;
	align-items: center;
	text-align: center;
	padding: 0 15px;
	div {
		height: 40px;
		padding-top: 10px;
		margin-right: 40px;
		:hover {
			cursor: pointer;
			border-bottom: 3px solid white;
		}
		@media (max-width: 535px) {
			font-size: 15px;
		}
	}
`;

const FontIcons = styled(FontAwesomeIcon)`
	background-color: white;
	padding: 5px 10px;
	border-radius: 10px;
`;

const GlassBtn = styled.div`
	position: absolute;
	right: 20px;
	top: 20%;
	border: none;
	cursor: pointer;
`;

const S = {
	HeaderWrapper,
	HeaderLogo,
	IconContainer,
	FontIcons,
	GlassBtn,
};
