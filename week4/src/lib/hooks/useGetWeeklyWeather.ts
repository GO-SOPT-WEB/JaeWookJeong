import useSWR from "swr";
import { weatherGetFetcher } from "../axios";
import { GetFiveDayWeatherInfo } from "../../types/weather";

export const useGetWeeklyWeather = (area: string) => {
  const { data, isLoading, error } = useSWR<GetFiveDayWeatherInfo>(
    `data/2.5/forecast?q=${area}&appid=${
      import.meta.env.VITE_APP_WEATHER
    }&units=metric`,
    weatherGetFetcher,
    {
      errorRetryCount: 3,
    }
  );

  return {
    weatherInfo: data,
    isLoading: isLoading,
    isError: error,
  };
};

export default useGetWeeklyWeather;
