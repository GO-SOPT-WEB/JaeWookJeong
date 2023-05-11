import { WeatherItem } from "../components";
import { WeatherLayout } from "../components/Layout";
import useGetDayWeather from "../lib/hooks/useGetDayWeather";

const TodayWeather = () => {
  const { weatherInfo } = useGetDayWeather();

  return (
    weatherInfo && (
      <WeatherLayout>
        <WeatherItem weatherInfo={weatherInfo} />
      </WeatherLayout>
    )
  );
};

export default TodayWeather;
