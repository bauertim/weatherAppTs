import { useDataContext } from "../context/DataContext";
import { motion } from "framer-motion";
import SmallCityBox from "./SmallCityBox";

const PreviousSearch = () => {
  const { searchList } = useDataContext();
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
      <div className="bg-blue-500 sm:w-[600px] mx-auto flex flex-col py-3 rounded-lg">
        <h2 className="text-sm text-gray-200 text-light px-3 mb-1">
          Recently viewed cities
        </h2>
        <ul>
          {searchList.slice(0, 5).map((search, index) => (
            <SmallCityBox key={index + search.name} search={search} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default PreviousSearch;
