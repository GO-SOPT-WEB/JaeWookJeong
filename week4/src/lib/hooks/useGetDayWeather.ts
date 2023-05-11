import useSWR from "swr";
import { weatherGetFetcher } from "../axios";
import { WeatherInfo } from "../../types/weather";

export const useGetDayWeather = () => {
  const { data, error } = useSWR<WeatherInfo>(
    `data/2.5/weather?q=seoul&appid=${
      import.meta.env.VITE_APP_WEATHER
    }&units=metric`,
    weatherGetFetcher,
    {
      errorRetryCount: 3,
    }
  );
  return {
    weatherInfo: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetDayWeather;
