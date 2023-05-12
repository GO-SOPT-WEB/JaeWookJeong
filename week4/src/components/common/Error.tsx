import styled from "styled-components";

const Error = () => {
  return (
    <StErrorWrapper>
      <p> 올바른 도시를 입력했는지 확인해주세요!</p>
    </StErrorWrapper>
  );
};

export default Error;

const StErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  p {
    color: ${({ theme }) => theme.colors.Color_Gray_4};
    ${({ theme }) => theme.fonts.Noto_M_Subtitle_1};
  }
`;
