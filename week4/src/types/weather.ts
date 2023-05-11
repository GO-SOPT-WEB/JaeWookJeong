export interface WeatherInfo {
  name: string;
  weather: [
    {
      description: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  clouds: {
    all: number;
  };
  dt_txt?: string;
}

export interface GetFiveDayWeatherInfo {
  list: WeatherInfo[];
}
