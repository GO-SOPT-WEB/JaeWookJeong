import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, TodayWeather, WeeklyWeather } from "../../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="day/:area" element={<TodayWeather />} />
          <Route path="week/:area" element={<WeeklyWeather />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
