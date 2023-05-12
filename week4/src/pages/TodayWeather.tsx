import { useParams } from "react-router-dom";
import { WeatherItem } from "../components";
import { WeatherLayout } from "../components/Layout";
import useGetDayWeather from "../lib/hooks/useGetDayWeather";
import { LandingItem } from "../components/Landing";
import { Error } from "../components/common";

const TodayWeather = () => {
  const { area } = useParams() as { area: string };
  const { weatherInfo, isLoading, isError } = useGetDayWeather(area);

  if (isError) return <Error />;
  return (
    <WeatherLayout>
      {isLoading && <LandingItem />}
      {weatherInfo && <WeatherItem weatherInfo={weatherInfo} />}
    </WeatherLayout>
  );
};

export default TodayWeather;
