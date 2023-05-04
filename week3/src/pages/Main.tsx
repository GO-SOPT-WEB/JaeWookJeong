import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import { Header, ItemList, Nav } from "../components";
import ITEM_DATA from "../constants/ItemData";
import { itemDataProps } from "../types/cardList";
import { FinalModal, Modal } from "../components/common";

const Main = () => {
  const [count, setCount] = useState(5);
  const [score, setScore] = useState(0);
  const [isClear, setIsClear] = useState(false);
  const [isFliped, setIsFliped] = useState<number[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  let randomDataList: itemDataProps[] = [];
  let pasteDataList: itemDataProps[] = [];
  randomDataList = ITEM_DATA.slice(0, count).sort(() => Math.random() - 0.5);
  pasteDataList = [...randomDataList, ...randomDataList];

  const realDataList: itemDataProps[] = useMemo(() => {
    return pasteDataList.sort(() => Math.random() - 0.5);
  }, [isClear]);

  useEffect(() => {
    if (score === count) {
      setIsOpenModal((prev) => !prev);
    }
  }, [score, count]);

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
    <Wrapper>
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
      {isOpenModal && (
        <Modal>
          <FinalModal setIsOpenModal={setIsOpenModal} />
        </Modal>
      )}
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.main`
  position: relative;
`;
