import { useParams } from "react-router-dom";
import { WeatherItem } from "../components";
import { WeatherLayout } from "../components/Layout";
import useGetWeeklyWeather from "../lib/hooks/useGetWeeklyWeather";
import { LandingItem } from "../components/Landing";
import { Error } from "../components/common";

const WeeklyWeather = () => {
  const landingArr: string[] = Array(5).fill("");
  const spliceDate = [0];
  const { area } = useParams() as { area: string };
  const { weatherInfo, isLoading, isError } = useGetWeeklyWeather(area);

  if (weatherInfo) {
    const len = weatherInfo?.list.length / 5;
    for (let i = 0; i < 4; i++) {
      spliceDate.push(spliceDate[i] + len);
    }
  }

  if (isError) return <Error />;

  return (
    <WeatherLayout>
      {isLoading && landingArr.map((_, idx) => <LandingItem key={idx} />)}
      {weatherInfo &&
        spliceDate.map((weather, idx) => (
          <WeatherItem key={idx} weatherInfo={weatherInfo.list[weather]} />
        ))}
    </WeatherLayout>
  );
};

export default WeeklyWeather;
