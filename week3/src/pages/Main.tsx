import { useState } from "react";
import { Header, Nav } from "../components";

const Main = () => {
  const [count, setCount] = useState(5);
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
    </>
  );
};

export default Main;
