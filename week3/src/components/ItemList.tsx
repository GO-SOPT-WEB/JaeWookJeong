import styled from "styled-components";
import { Item } from ".";
import { itemDataProps } from "../types/cardList";
import { useEffect, useState } from "react";

interface ItemListProps {
  count: number;
  realDataList: itemDataProps[];
  isClear: boolean;
  score: number;
  isFliped: number[];
  setIsFliped: React.Dispatch<React.SetStateAction<number[]>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const ItemList = (props: ItemListProps) => {
  const { count, realDataList, isClear, setScore, isFliped, setIsFliped } =
    props;
  const [isMatch, setIsMatch] = useState<number[]>([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isMatch.length === 2) {
      setIsClicked(true);
      if (isMatch[0] === isMatch[1]) {
        setScore((prev) => prev + 1);
        setIsMatch([]);
        setIsClicked(false);
      } else {
        setTimeout(() => {
          setIsMatch([]);
          setIsFliped(isFliped.slice(0, -2));
          setIsClicked(false);
        }, 1000);
      }
    }
  }, [isMatch, setIsFliped, isFliped, setScore]);

  const handlePushNumber = (idx: number, card: number) => {
    setIsMatch([...isMatch, card]);
    setIsFliped([...isFliped, idx]);
  };

  return (
    <Wrapper>
      {realDataList.slice(0, count * 2).map(({ src, alt, card }, idx) => (
        <Item
          key={idx}
          idx={idx}
          src={src}
          alt={alt}
          card={card}
          isClear={isClear}
          isFliped={isFliped}
          setIsFliped={setIsFliped}
          handlePushNumber={handlePushNumber}
          isClicked={isClicked}
        />
      ))}
    </Wrapper>
  );
};

export default ItemList;

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  width: 100%;
  margin-top: 5rem;
`;
