import { useEffect } from "react";
import { useDataContext } from "../context/DataContext";
import { fetchDataForecast, fetchDataWeather } from "../apiCalls/fetchWeather";

export const useCityFetch = () => {
  const {
    setWeatherData,
    searchList,
    setSearchList,
    errorFetch,
    setErrorFetch,
    setForecastData,
    city,
  } = useDataContext();

  useEffect(() => {
    if (city !== "") {
      fetchDataWeather(
        setWeatherData,
        setSearchList,
        searchList,
        setErrorFetch,
        errorFetch,
        city
      );
      fetchDataForecast(setForecastData, city);
    }
  }, [city]);
};
