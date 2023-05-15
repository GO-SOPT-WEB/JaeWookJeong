import styled from "styled-components";
import { loading } from "./animation";

const LandingItem = () => {
  return (
    <StWrapper>
      <StDay />
      <StTopBlock />
      <StTopBlock />
    </StWrapper>
  );
};

export default LandingItem;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 21rem;
  height: 30rem;
  padding: 1rem 3rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.Color_Gray_2};
`;

const StDay = styled.div`
  width: 100%;
  height: 2.2rem;
  margin-bottom: 1rem;

  animation: ${loading} 2s infinite linear;
`;

const StTopBlock = styled.div`
  width: 100%;
  height: 9.4rem;

  animation: ${loading} 2s infinite linear;

  & + & {
    margin-top: 1rem;
  }
`;
