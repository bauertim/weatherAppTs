import { useEffect, useState } from "react";
import { useDataContext } from "../context/DataContext";
import {
  fetchDataForecast,
  fetchDataForecastCurrent,
  fetchDataWeather,
  fetchWeatherDataCurrent,
} from "../apiCalls/fetchWeather";
import { getUserLocation } from "../utils/userLocation";

export const useLocationStorage = () => {
  const {
    setWeatherData,
    searchList,
    setSearchList,
    errorFetch,
    setErrorFetch,
    setForecastData,
  } = useDataContext();

  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    const storage = localStorage.getItem("currentLocation");
    getUserLocation(setUserLocation);
    if (storage) {
      setUserLocation(JSON.parse(storage));
    } else {
      fetchDataWeather(
        setWeatherData,
        setSearchList,
        searchList,
        setErrorFetch,
        errorFetch,
        "Ljubljana"
      );
      fetchDataForecast(setForecastData, "Ljubljana");
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      fetchWeatherDataCurrent(
        setWeatherData,
        setSearchList,
        searchList,
        setErrorFetch,
        errorFetch,
        userLocation
      );
      fetchDataForecastCurrent(setForecastData, userLocation);
    }
  }, [userLocation]);
};
