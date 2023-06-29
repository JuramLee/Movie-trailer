import { useDetailInfo } from 'hooks/queries/get-movie-infos';
import styled from 'styled-components';
import { IMAGE_URL } from 'Consts/URL';
function DetailInfo({ id }) {
	const { data: detail } = useDetailInfo(id);
	const data = detail && detail.data;
	console.log(detail);

	const IMG_BASE_URL = IMAGE_URL(1280);
	const integer = detail && data.vote_average.toFixed(2);

	return (
		<S.DetailWrap>
			{data && (
				<>
					<S.BackdropCover />
					<S.Backdrop src={IMG_BASE_URL + data.backdrop_path} />
					<S.Contents>
						<S.PostImg src={IMG_BASE_URL + data.poster_path} />
						<S.DetailTopWrap>
							<S.Title>{data.title}</S.Title>
							<S.Info>
								<S.ItemContent>⭐{integer}</S.ItemContent>
								<S.ItemContent>{data.runtime} mins</S.ItemContent>
								<S.ItemContent>{data.release_date}</S.ItemContent>
								<S.ItemContent>
									{data.popularity.toLocaleString()}M
								</S.ItemContent>
								<S.ItemContent>{data.genres[0].name}</S.ItemContent>
							</S.Info>
							<S.Content>
								{data.tagline}
								<br />
								{data.overview}
							</S.Content>
						</S.DetailTopWrap>
					</S.Contents>
				</>
			)}
		</S.DetailWrap>
	);
}

export default DetailInfo;

const DetailWrap = styled.div`
	margin: 0;
	padding: 0;
	width: 100%;
	background-color: black;
`;

const Iframe = styled.iframe`
	width: 100%;
	height: 600px;
`;

const Contents = styled.div`
	width: 80%;
	position: relative;
	display: flex;
	top: -130px;
	color: #000;
	margin: 0 auto;
`;

const Backdrop = styled.img`
	width: 100%;
	height: 680px;
	object-fit: cover;
`;

const BackdropCover = styled.div`
	width: 100%;
	height: 680px;
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
`;

const DetailTopWrap = styled.div`
	width: 75%;
	display: flex;
	flex-direction: column;
	padding-left: 40px;
`;

const PostImg = styled.img`
	width: 250px;
	height: 350px;
`;

const Title = styled.div`
	padding: 50px 20px 60px 0;
	font-size: 40px;
	font-weight: bold;
	color: white;
`;

const Content = styled.div`
	width: 90%;
	font-size: 20px;
	line-height: 30px;
	color: white;
`;

const Info = styled.div`
	width: 800px;
	height: 25px;
	padding: 0;
	display: flex;
	padding-bottom: 50px;
`;

const ItemContent = styled.div`
	font-size: 20px;
	margin-right: 30px;
	color: gray;
`;

const S = {
	DetailWrap,
	Iframe,
	Contents,
	Backdrop,
	BackdropCover,
	DetailTopWrap,
	PostImg,
	Info,
	Title,
	Content,
	ItemContent,
};
