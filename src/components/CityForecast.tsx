import { useDataContext } from "../context/DataContext";
import { motion } from "framer-motion";

const CityForecast = () => {
  const { forecastData } = useDataContext();
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 100,
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
      <div className="my-4 flex flex-row overflow-x-auto bg-blue-900 rounded-lg p-2 sm:w-[600px] mx-auto">
        {forecastData &&
          forecastData.list.map((hours, index) => (
            <div
              key={index}
              className="mr-4 h-20 flex flex-col items-center justify-between"
            >
              <p className="text-center text-sm">
                {hours.dt_txt.split(" ")[1].split(":")[0]}
              </p>
              <div className="h-9">
                <img
                  src={`http://openweathermap.org/img/wn/${hours.weather[0].icon}.png`}
                  alt="weather icon"
                />
              </div>
              <p>{hours.main.temp.toFixed(1) + "°"}</p>
            </div>
          ))}
      </div>
    </motion.div>
  );
};

export default CityForecast;
