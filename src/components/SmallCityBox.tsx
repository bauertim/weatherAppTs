import { useDataContext } from "../context/DataContext";
import { useFormContext } from "../context/FormContext";

type SmallBoxProps = {
  search: {
    name: string;
    weather: Array<{ icon: string }>;
    main: { temp: number };
  };
};

const SmallCityBox = ({ search }: SmallBoxProps) => {
  const { setCity } = useDataContext();
  const { setInputValue } = useFormContext();

  return (
    <li className="text-sm">
      <button
        onClick={() => {
          setCity(search.name);
          setInputValue(search.name);
        }}
        className="flex flex-row items-center bg-gradient-to-r from-blue-400 to-blue-500 rounded-sm px-3 border-y-[0.5px] w-full"
      >
        <div className="w-28 flex">{search.name}</div>
        <img
          src={`http://openweathermap.org/img/wn/${search.weather[0].icon}.png`}
          alt="weather icon"
        />
        <p>{search.main.temp.toFixed(1) + "°"} </p>
      </button>
    </li>
  );
};

export default SmallCityBox;
