import { useState } from "react";
import styled from "styled-components";

interface ItemProps {
  idx: number;
  src: string;
  alt: string;
}
const Item = (props: ItemProps) => {
  const { idx, src, alt } = props;
  const [isFliped, setIsFliped] = useState(Array(10).fill(false));
  const copyFliped = [...isFliped];

  const handleFlip = (id: number) => {
    copyFliped[id] = !copyFliped[id];
    setIsFliped(copyFliped);
  };

  return (
    <Wrapper>
      {isFliped[idx - 1] ? (
        <Image src={src} alt={alt} onClick={() => handleFlip(idx - 1)} />
      ) : (
        <NonFlip onClick={() => handleFlip(idx - 1)} />
      )}
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

const NonFlip = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.Color_Coral};
`;
