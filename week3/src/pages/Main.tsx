import { useState } from "react";
import { Header, ItemList, Nav } from "../components";
import ITEM_DATA from "../constants/ItemData";
import { itemDataProps } from "../types/cardList";

const Main = () => {
  const [count, setCount] = useState(5);
  const [isClear, setIsClear] = useState(false);
  let randomDataList: itemDataProps[] = [];
  let pasteDataList: itemDataProps[] = [];

  randomDataList = ITEM_DATA.sort(() => Math.random() - 0.5);
  pasteDataList = [...randomDataList, ...randomDataList];

  const handleChangeCount = (mode: string) => {
    switch (mode) {
      case "EASY":
        setCount(5);
        setIsClear(true);
        break;
      case "NORMAL":
        setCount(7);
        setIsClear(true);
        break;
      case "HARD":
        setCount(9);
        setIsClear(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header count={count} />
      <Nav handleChangeCount={handleChangeCount} />
      <ItemList count={count} pasteDataList={pasteDataList} isClear={isClear} />
    </>
  );
};

export default Main;
