import { useState } from "react";
import { Header, ItemList, Nav } from "../components";
import ITEM_DATA from "../constants/ItemData";
import { itemDataProps } from "../types/cardList";

const Main = () => {
  const [count, setCount] = useState(5);
  let randomDataList: itemDataProps[] = [];
  let pasteDataList: itemDataProps[] = [];

  randomDataList = ITEM_DATA.sort(() => Math.random() - 0.5);
  pasteDataList = [...randomDataList, ...randomDataList];

  const handleChangeCount = (mode: string) => {
    switch (mode) {
      case "EASY":
        setCount(5);
        break;
      case "NORMAL":
        setCount(7);
        break;
      case "HARD":
        setCount(9);

        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header count={count} />
      <Nav handleChangeCount={handleChangeCount} />
      <ItemList count={count} pasteDataList={pasteDataList} />
    </>
  );
};

export default Main;
