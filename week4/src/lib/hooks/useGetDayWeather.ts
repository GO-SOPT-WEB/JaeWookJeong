import useSWR from "swr";
import { weatherGetFetcher } from "../axios";
import { WeatherInfo } from "../../types/weather";

export const useGetDayWeather = (area: string) => {
  const { data, isLoading, error } = useSWR<WeatherInfo>(
    `data/2.5/weather?q=${area}&appid=${
      import.meta.env.VITE_APP_WEATHER
    }&units=metric`,
    weatherGetFetcher,
    {
      errorRetryCount: 3,
    }
  );
  return {
    weatherInfo: data,
    isLoading,
    isError: error,
  };
};

export default useGetDayWeather;
