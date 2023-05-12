import styled from "styled-components";
import { WEATER_TYPE } from "../constants/weather";
import { WeatherInfo } from "../types/weather";
import { useEffect, useState } from "react";

interface WeatherItemProps {
  weatherInfo: WeatherInfo;
}
const WeatherItem = (props: WeatherItemProps) => {
  const [matchUrl, setMatchUrl] = useState("");
  const { weatherInfo } = props;
  const { main } = weatherInfo;

  useEffect(() => {
    for (let i = 0; i < WEATER_TYPE.length; i++) {
      if (WEATER_TYPE[i].description === weatherInfo.weather[0].description) {
        setMatchUrl(WEATER_TYPE[i].imgURL);
      }
    }
  }, [weatherInfo.weather]);

  return (
    <StWrapper>
      <StDay>{weatherInfo.dt_txt?.slice(0, 10)}</StDay>
      <StImage src={matchUrl} />
      <StDayInfoBlock>
        <StDayDetailBlock>
          <StDayText>온도</StDayText>
          <StDayText>{main.temp}</StDayText>
        </StDayDetailBlock>
        <StDayDetailBlock>
          <StDayText>체감 온도</StDayText>
          <StDayText>{main.feels_like}</StDayText>
        </StDayDetailBlock>
        <StDayDetailBlock>
          <StDayText>최저 / 최고</StDayText>
          <StDayText>
            {main.temp_min} / {main.temp_max}
          </StDayText>
        </StDayDetailBlock>
        <StDayDetailBlock>
          <StDayText>구름</StDayText>
          <StDayText>{weatherInfo.clouds.all}%</StDayText>
        </StDayDetailBlock>
      </StDayInfoBlock>
    </StWrapper>
  );
};

export default WeatherItem;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem 3rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.Color_Coral};
`;
const StDay = styled.div`
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.colors.Color_White};
  ${({ theme }) => theme.fonts.Noto_SB_Title_2}
`;
const StImage = styled.img`
  width: 15rem;
  margin-bottom: 1rem;

  border-radius: 1rem;
`;
const StDayInfoBlock = styled.ul`
  width: 100%;
`;
const StDayDetailBlock = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 1rem;
  }
`;
const StDayText = styled.span`
  ${({ theme }) => theme.fonts.Noto_M_Subtitle_1}
`;
