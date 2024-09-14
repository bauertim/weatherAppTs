import { useState } from "react";
import { useDataContext } from "../context/DataContext";
import { motion } from "framer-motion";
import { useLocationStorage } from "../hooks/useLocationStorage";
import { useCityFetch } from "../hooks/useCityFetch";

const CityWeather = () => {
  const { weatherData } = useDataContext();
  const [hideDiv, setHideDiv] = useState(true);

  useLocationStorage();
  useCityFetch();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
    >
      <motion.button
        onClick={() => setHideDiv(!hideDiv)}
        className="flex flex-col bg-blue-500 text-white rounded-xl p-4 font-light sm:w-[600px] mx-auto bg-gradient-to-r from-blue-400 to-blue-500 sm:cursor-default w-full sm:justify-between items-center sm:items-stretch"
      >
        {weatherData ? (
          <div className="flex flex-row items-center justify-center sm:justify-between sm:ml-8 ">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl mt-1">{weatherData.name}</h2>

              <p className="text-5xl">{weatherData.main.temp.toFixed(1)}°</p>
              <p className="mt-1">{weatherData.weather[0].description}</p>
              <div className="flex flex-row gap-5 text-sm">
                <p>H : {weatherData.main.temp_max.toFixed(0)}°C</p>
                <p>L : {weatherData.main.temp_min.toFixed(0)}°C</p>
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="weather icon"
                className="w-[50px] h-[50px]"
              />
              <div
                className={`${
                  hideDiv ? "hidden" : "sm:hidden flex flex-col"
                } text-sm sm:mr-4 sm:mt-4`}
              >
                <p>Feels like : {weatherData.main.feels_like}°C</p>
                <p>Humidity : {weatherData.main.humidity}%</p>
                <p>Pressure : {weatherData.main.pressure}</p>
                <p>Wind Speed : {weatherData.wind.speed}m/s</p>
              </div>
            </div>
            <div className="hidden sm:flex"></div>
            <div className="text-sm hidden sm:flex sm:flex-col sm:mr-4 sm:mt-4">
              <p>Feels like : {weatherData.main.feels_like}°C</p>
              <p>Humidity : {weatherData.main.humidity}%</p>
              <p>Pressure : {weatherData.main.pressure}</p>
              <p>Wind Speed : {weatherData.wind.speed}m/s</p>
            </div>
          </div>
        ) : (
          <p>Search for weather</p>
        )}
      </motion.button>
    </motion.div>
  );
};

export default CityWeather;
