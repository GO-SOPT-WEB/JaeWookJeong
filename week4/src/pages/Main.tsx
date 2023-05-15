import { Outlet } from "react-router-dom";
import { Header, Input } from "../components/common";

const Main = () => {
  return (
    <div>
      <Header />
      <Input />
      <Outlet />
    </div>
  );
};

export default Main;
