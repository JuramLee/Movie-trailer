import styled from 'styled-components';

const contributors = [
	{ username: 'Hyunseo', url: 'https://github.com/HyunseoKoo' },
	{ username: 'Nasil', url: 'https://github.com/nasilKiM' },
	{ username: 'Juram', url: 'https://github.com/JuramLee' },
	{ username: 'Jaehoon', url: 'https://github.com/JaeHoonKOR' },
	{ username: 'YoungSeung', url: 'https://github.com/YoungSeungJang' },
];

const BasicFooter = () => {
	return (
		<>
			<S.Wrapper>
				<FooterText>PROJECT CONTRIBUTORS:</FooterText>
				<FooterLinkList>
					{contributors.map(contributor => (
						<FooterLinkItem key={contributor.username}>
							<FooterLink href={contributor.url}>
								{contributor.username}
							</FooterLink>
						</FooterLinkItem>
					))}
				</FooterLinkList>
			</S.Wrapper>
			;
		</>
	);
};

export default BasicFooter;

const Wrapper = styled.div`
	height: 150px;
	min-width: 350px;
	max-width: 1200px;
	margin: 0 auto;
	padding: 50px 0;
	color: white;
	text-align: center;
`;

const FooterText = styled.p`
	font-size: 18px;
	font-weight: 700;
	margin: 0;
`;

const FooterLinkList = styled.ul`
	list-style-type: none;
	font-size: 18px;
	padding: 0;
	margin-top: 15px;
`;

const FooterLinkItem = styled.li`
	display: inline-block;
	margin: 0 10px;
`;

const FooterLink = styled.a`
	color: #333;
	text-decoration: none;

	&:hover {
		color: #ff69b4;
	}
`;

const S = {
	Wrapper,
};
