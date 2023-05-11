import { ReactNode } from "react";
import styled from "styled-components";

interface WeatherLayoutProps {
  children: ReactNode;
}
const WeatherLayout = ({ children }: WeatherLayoutProps) => {
  return <StWrapper>{children}</StWrapper>;
};

export default WeatherLayout;

const StWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;

  width: 100%;
  margin-top: 5rem;
`;
