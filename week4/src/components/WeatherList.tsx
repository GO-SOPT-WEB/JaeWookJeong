import styled from "styled-components";
import { WeatherItem } from ".";

const WeatherList = () => {
  return (
    <StWrapper>
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
    </StWrapper>
  );
};

export default WeatherList;

const StWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;

  width: 100%;
  margin-top: 5rem;
`;
