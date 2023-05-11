import { useEffect } from "react";
import styled, { css } from "styled-components";

interface ItemProps {
  idx: number;
  src: string;
  alt: string;
  card: number;
  isClear: boolean;
  isFliped: number[];
  isClicked: boolean;
  isRotate: boolean;
  setIsFliped: React.Dispatch<React.SetStateAction<number[]>>;
  handlePushNumber: (idx: number, card: number) => void;
}
const Item = (props: ItemProps) => {
  const {
    idx,
    src,
    alt,
    card,
    isClear,
    isFliped,
    isClicked,
    isRotate,
    setIsFliped,
    handlePushNumber,
  } = props;

  useEffect(() => {
    if (isClear) {
      setIsFliped([]);
    }
  }, [isClear, setIsFliped]);

  return (
    <Wrapper>
      {isFliped.includes(idx) ? (
        <Image src={src} alt={alt} isRotate={isRotate} />
      ) : (
        <NonFlip
          disabled={isClicked}
          onClick={() => handlePushNumber(idx, card)}
        />
      )}
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.div`
  position: relative;

  width: 25rem;
  height: 20rem;

  border: 1rem solid ${({ theme }) => theme.colors.Color_Yellow};
  border-radius: 1rem;
`;
const Image = styled.img<{ isRotate: boolean }>`
  width: 100%;
  height: 100%;
  animation: vibration 0.1s;

  ${({ isRotate }) =>
    isRotate &&
    css`
      @keyframes vibration {
        from {
          transform: rotate(10deg);
        }
        to {
          transform: rotate(-10deg);
        }
      }
    `};
`;

const NonFlip = styled.button`
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.Color_Coral};

  cursor: pointer;
`;
