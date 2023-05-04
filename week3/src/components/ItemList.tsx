import styled from "styled-components";
import { Item } from ".";
import { itemDataProps } from "../types/cardList";

interface ItemListProps {
  count: number;
  pasteDataList: itemDataProps[];
  isClear: boolean;
}

const ItemList = (props: ItemListProps) => {
  const { count, pasteDataList, isClear } = props;

  return (
    <Wrapper>
      {pasteDataList.slice(0, count * 2).map(({ src, alt }, idx) => (
        <Item
          key={idx}
          idx={idx}
          src={src}
          alt={alt}
          count={count}
          isClear={isClear}
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
