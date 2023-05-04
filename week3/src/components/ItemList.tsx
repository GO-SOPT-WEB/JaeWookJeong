import styled from "styled-components";
import { Item } from ".";
import ITEM_DATA from "../constants/ItemData";

interface ItemListProps {
  mode: string;
}

const ItemList = (props: ItemListProps) => {
  const { mode } = props;
  console.log(mode);
  return (
    <Wrapper>
      {ITEM_DATA.map(({ src, alt, id }) => (
        <Item key={id} idx={id} src={src} alt={alt} />
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
