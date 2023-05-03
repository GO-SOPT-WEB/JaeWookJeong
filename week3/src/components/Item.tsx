import styled from "styled-components";

interface ItemProps {
  src: string;
  alt: string;
}
const Item = (props: ItemProps) => {
  const { src, alt } = props;
  return (
    <Wrapper>
      <Image src={src} alt={alt} />
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.div`
  width: 25rem;
  height: 20rem;

  border: 1rem solid ${({ theme }) => theme.colors.Color_Yellow};
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
