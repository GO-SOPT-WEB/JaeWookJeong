import styled from "styled-components";
import { Item } from ".";
import ITEM_DATA from "../constants/ItemData";

const ItemList = () => {
  return (
    <Wrapper>
      {ITEM_DATA.map(({ src, alt, id }) => (
        <Item key={id} src={src} alt={alt} />
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
