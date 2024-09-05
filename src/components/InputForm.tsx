import { Search } from "lucide-react";
import { useDataContext } from "../context/DataContext";
import { useFormContext } from "../context/FormContext";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { ChangeEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InputForm = () => {
  const { setInputValue, inputValue } = useFormContext();
  const { setCity, city, errorFetch } = useDataContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // used for form without google autocomplete
  // const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  // };

  useEffect(() => {
    if (inputValue !== "") {
      setInputValue(city);
    }
  }, [city]);

  return (
    <motion.div
      initial={{ opacity: 0, size: 0 }}
      animate={{ opacity: 1, size: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.6,
      }}
    >
      <div className="flex text-black justify-center flex-row items-center relative">
        <AnimatePresence initial={false}>
          <motion.div
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0.1],
            }}
            transition={{
              duration: 4.2,
              times: [0, 0.1, 0.9, 1],
            }}
            key={errorFetch.toString()}
            exit={{ opacity: 0, size: 0 }}
            className="absolute -bottom-8 z-10 bg-red-500 px-4 py-3 rounded-lg text-lg text-white"
          >
            Can't find the city :/
          </motion.div>
        </AnimatePresence>
        <ReactGoogleAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
          onPlaceSelected={(place) => {
            if (place) {
              if (place.name) {
                setCity(place.name);
              } else if (place.formatted_address) {
                setCity(place.formatted_address);
              }
            }
          }}
          value={inputValue}
          onChange={handleInputChange}
          className="bg white shadow-md shadow-neutral-300 rounded-full p-2 pl-4 flex w-72 mt-6 mb-4"
        />
        <button className="ml-3 mt-1" onClick={() => setCity(inputValue)}>
          <Search size={24} />
        </button>
      </div>
      {/* !!! Input form without google autocomplete  !!!*/}
      {/* <form
        onSubmit={handleSubmit}
        className="flex text-black justify-center flex-row items-center"
      >
        <input
          type="text"
          placeholder="Enter city name"
          value={inputValue}
          onChange={handleInputChange}
          className="bg white shadow-md shadow-neutral-300 rounded-full p-2 pl-4 flex w-72 mt-6 mb-4"
        />
        <button className="ml-3 mt-1" onClick={() => setCity(inputValue)}>
          Search
        </button>
      </form> */}
    </motion.div>
  );
};

export default InputForm;
