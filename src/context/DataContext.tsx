import { createContext, PropsWithChildren, useContext, useState } from "react";

type DataContextType = {
  weatherData: WeatherType | null;
  setWeatherData: Function;
  searchList: SearchItem[] | [];
  setSearchList: Function;
  city: string;
  setCity: Function;
  forecastData: ForecastItem | null;
  setForecastData: Function;
  errorFetch: boolean;
  setErrorFetch: Function;
};

interface ForecastItem {
  list: Array<{
    dt_txt: string;
    weather: Array<{ icon: string }>;
    main: { temp: number };
  }>;
}

interface WeatherType {
  name: string;
  weather: Array<{ icon: string; description: string }>;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
    pressure: number;
    feels_like: number;
  };
  wind: { speed: number };
}

interface SearchItem {
  name: string;
  weather: Array<{ icon: string }>;
  main: { temp: number };
}

export const DataContext = createContext<DataContextType>({
  weatherData: null,
  setWeatherData: () => {},
  searchList: [],
  setSearchList: () => {},
  city: "",
  setCity: () => {},
  forecastData: null,
  setForecastData: () => {},
  errorFetch: false,
  setErrorFetch: () => {},
});

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchList, setSearchList] = useState([]);
  const [city, setCity] = useState("");
  const [forecastData, setForecastData] = useState(null);
  const [errorFetch, setErrorFetch] = useState(false);

  return (
    <DataContext.Provider
      value={{
        weatherData,
        setSearchList,
        setWeatherData,
        searchList,
        city,
        setCity,
        forecastData,
        setForecastData,
        errorFetch,
        setErrorFetch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export function useDataContext() {
  const context = useContext(DataContext);
  if (context === null) {
    throw Error("cant use it outside of Datacontextprovider");
  }
  return context;
}
