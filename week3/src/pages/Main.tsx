import { useMemo, useState } from "react";
import { Header, ItemList, Nav } from "../components";
import ITEM_DATA from "../constants/ItemData";
import { itemDataProps } from "../types/cardList";

const Main = () => {
  const [count, setCount] = useState(5);
  const [score, setScore] = useState(0);
  const [isClear, setIsClear] = useState(false);
  const [isFliped, setIsFliped] = useState<number[]>([]);

  let randomDataList: itemDataProps[] = [];
  let pasteDataList: itemDataProps[] = [];
  randomDataList = ITEM_DATA.slice(0, count).sort(() => Math.random() - 0.5);
  pasteDataList = [...randomDataList, ...randomDataList];

  const realDataList: itemDataProps[] = useMemo(() => {
    return pasteDataList.sort(() => Math.random() - 0.5);
  }, [isClear]);

  const handleChangeCount = (mode: string) => {
    setScore(0);
    setIsClear(true);
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
        setCount(5);
    }
  };

  return (
    <>
      <Header
        count={count}
        score={score}
        handleChangeCount={handleChangeCount}
      />
      <Nav handleChangeCount={handleChangeCount} />
      <ItemList
        count={count}
        realDataList={realDataList}
        isClear={isClear}
        score={score}
        setScore={setScore}
        isFliped={isFliped}
        setIsFliped={setIsFliped}
      />
    </>
  );
};

export default Main;
