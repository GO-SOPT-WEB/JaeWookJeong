import styled from "styled-components";
import { Button } from "./common";

interface NavProps {
  handleChangeCount: (mode: string) => void;
}

const Nav = (props: NavProps) => {
  const { handleChangeCount } = props;

  return (
    handleChangeCount && (
      <Wrapper>
        <Button text="EASY" handleChangeCount={handleChangeCount} />
        <Button text="NORMAL" handleChangeCount={handleChangeCount} />
        <Button text="HARD" handleChangeCount={handleChangeCount} />
      </Wrapper>
    )
  );
};

export default Nav;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 1rem 0;
`;
