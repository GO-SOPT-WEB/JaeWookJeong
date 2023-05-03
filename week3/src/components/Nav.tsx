import styled from "styled-components";
import { Button } from "./common";

const Nav = () => {
  return (
    <Wrapper>
      <Button text="EASY" />
      <Button text="NORMAL" />
      <Button text="HARD" />
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;
