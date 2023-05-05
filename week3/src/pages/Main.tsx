import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import { Header, ItemList, Nav } from "../components";
import ITEM_DATA from "../constants/ItemData";
import { ItemDataInfo } from "../types/cardList";
import { FinalModal, Modal } from "../components/common";
import { EASY_SCORE, HARD_SCORE, NORMAL_SCORE } from "../constants/totalScore";

const Main = () => {
  const [count, setCount] = useState(EASY_SCORE);
  const [score, setScore] = useState(0);
  const [isClear, setIsClear] = useState(false);
  const [isFliped, setIsFliped] = useState<number[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  let randomDataList: ItemDataInfo[] = [];
  let pasteDataList: ItemDataInfo[] = [];
  randomDataList = ITEM_DATA.slice(0, count).sort(() => Math.random() - 0.5);
  pasteDataList = [...randomDataList, ...randomDataList];

  const realDataList: ItemDataInfo[] = useMemo(() => {
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
        setCount(EASY_SCORE);
        break;
      case "NORMAL":
        setCount(NORMAL_SCORE);
        break;
      case "HARD":
        setCount(HARD_SCORE);
        break;
      default:
        setCount(EASY_SCORE);
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
