import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Link to="/">
      <StWrapper>날씨 예보</StWrapper>
    </Link>
  );
};

export default Header;

const StWrapper = styled.header`
  width: 100%;
  padding: 5rem;

  background-color: ${({ theme }) => theme.colors.Color_Sky};
  color: ${({ theme }) => theme.colors.Color_White};
  ${({ theme }) => theme.fonts.Noto_B_Title_3}
`;
