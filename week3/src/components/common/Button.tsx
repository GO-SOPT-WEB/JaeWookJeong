import styled from "styled-components";

interface ButtonProps {
  text: string;
  handleChangeCount: (mode: string) => void;
}
const Button = (props: ButtonProps) => {
  const { text, handleChangeCount } = props;

  return <Wrapper onClick={() => handleChangeCount(text)}>{text}</Wrapper>;
};

export default Button;

const Wrapper = styled.button`
  padding: 1rem;

  border: none;
  border-radius: 0.7rem;
  background-color: ${({ theme }) => theme.colors.Color_Coral};
  color: ${({ theme }) => theme.colors.Color_White};
  ${({ theme }) => theme.fonts.Noto_M_Subtitle_3}

  outline: none;
  cursor: pointer;

  & + & {
    margin-left: 1rem;
  }
`;
