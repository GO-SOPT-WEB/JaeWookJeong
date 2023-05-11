import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface childrenProps {
  children: ReactNode;
}
const Modal = ({ children }: childrenProps) => {
  const el = document.getElementById("modal") as HTMLElement;
  return ReactDOM.createPortal(children, el);
};

export default Modal;
