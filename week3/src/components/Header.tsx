import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <TitleBlock>
        <HeaderTitle>나라 맞추기</HeaderTitle>
        <ScoreText>1 / 1</ScoreText>
      </TitleBlock>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 3.5rem 0;

  background-color: ${({ theme }) => theme.colors.Color_Sky};
`;
const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeaderTitle = styled.h1`
  ${({ theme }) => theme.fonts.Noto_B_Title_3}
`;
const ScoreText = styled.span`
  margin-top: 1rem;
  ${({ theme }) => theme.fonts.Noto_B_Title_1}
`;
