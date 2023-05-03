import styled from "styled-components";

interface ButtonProps {
  text: string;
}
const Button = (props: ButtonProps) => {
  const { text } = props;
  return <Wrapper>{text}</Wrapper>;
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
`;
