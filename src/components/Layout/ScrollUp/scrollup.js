import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { flexAllCenter } from 'Styles/common';

const ScrollUpBtn = () => {
	const [scroll, setScroll] = useState(0);
	const [showBtn, setShowBtn] = useState(false);

	const onScroll = () => {
		setScroll(window.scrollY);
		if (scroll > 100) setShowBtn(true);
		if (scroll < 100) setShowBtn(false);
	};

	const scrollTop = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
		setScroll(0);
		setShowBtn(false);
	};

	useEffect(() => {
		onScroll();
	}, [scroll]);

	useEffect(() => {
		const watch = () => {
			window.addEventListener('scroll', onScroll);
		};
		watch();
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<S.Div>
			{showBtn && (
				<S.Icon onClick={scrollTop}>
					<motion.img
						animate={{ scale: 1.5 }}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 1.05 }}
						src="/Assets/top.png"
					/>
				</S.Icon>
			)}
		</S.Div>
	);
};

export default ScrollUpBtn;

const Div = styled.div`
	width: 100%;
	position: relative;
`;

const Icon = styled(motion.button)`
	width: 40px;
	background-color: white;
	border: none;
	height: 40px;
	border-radius: 50%;
	margin: 20px;
	color: white;
	font-weight: bolder;
	font-size: 20px;
	${flexAllCenter}
	position: fixed;
	right: 4%;
	bottom: 30px;
	cursor: pointer;
	> img {
		width: 35px;
	}
`;

const S = {
	Div,
	Icon,
};
