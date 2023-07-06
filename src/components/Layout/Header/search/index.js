import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SearchBar() {
	const navigate = useNavigate();

	const onSearchSubmit = e => {
		const searchWord = e.target.word.value;
		if (searchWord) {
			navigate('/search');
		}
	};

	return (
		<Form onSubmit={onSearchSubmit}>
			<InputBox
				autoComplete="off"
				placeholder="찾고 싶은 영화를 검색해주세요"
				name="word"
			></InputBox>
			<Button>
				<img src="/Assets/search_icon.png" alt="icon"></img>
			</Button>
		</Form>
	);
}

export default SearchBar;

const Form = styled.form`
	display: flex;
	flex-direction: row;
	width: 80%;
	border-radius: 30px;
	height: 50px;
	text-align: center;
	margin: 0 auto;
`;

const InputBox = styled.input`
	width: 100%;
	border: none;
	font-size: 1.2rem;
	border-top-left-radius: 25px;
	border-bottom-left-radius: 25px;
	position: relative;
	padding-left: 50px;
	:focus {
		outline: none;
	}
	@media (max-width: 768px) {
		height: 3vh;
		font-size: 0.8rem;
		padding-left: 20px;
	}
`;

const Button = styled.button`
	width: 10%;
	cursor: pointer;
	border: none;
	border-bottom-right-radius: 25px;
	border-top-right-radius: 25px;
	@media (max-width: 768px) {
		height: 3vh;
	}
	& img {
		width: 40%;
	}
`;
