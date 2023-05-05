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
  const [isMode, setIsMode] = useState("");
  const [isClear, setIsClear] = useState(false);
  const [isFliped, setIsFliped] = useState<number[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  let randomDataList: ItemDataInfo[] = [];
  let pasteDataList: ItemDataInfo[] = [];
  randomDataList = ITEM_DATA.sort(() => Math.random() - 0.5).slice(0, count);
  pasteDataList = [...randomDataList, ...randomDataList];

  const realDataList: ItemDataInfo[] = useMemo(() => {
    return pasteDataList.sort(() => Math.random() - 0.5);
  }, [isMode, isClear]);

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
        setIsMode(mode);
        break;
      case "NORMAL":
        setCount(NORMAL_SCORE);
        setIsMode(mode);
        break;
      case "HARD":
        setCount(HARD_SCORE);
        setIsMode(mode);
        break;
      default:
        window.location.reload();
        break;
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
