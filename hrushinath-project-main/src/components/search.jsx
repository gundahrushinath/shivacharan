import { FaSearch } from "react-icons/fa";
import ProductTable from "./table";

const Search = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-5 font-medium text-black border  ">
        <span className="text-2xl">Supply</span>

        <form className="border pr-3 mt-3 md:mt-0">
          <select className="text-gray-900 text-md p-2.5 w-full md:w-42">
            <option selected>Import/Export</option>
            <option value="US">Import</option>
            <option value="CA">Export</option>
            <option value="FR">Import</option>
            <option value="DE">Export</option>
          </select>
        </form>
      </div>
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full p-5 font-medium text-black border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <span className="text-black text-lg font-normal mr-4 pb-0.5">
            Domains
          </span>
          <span className="text-gray-400 text-lg font-normal mr-4">App</span>
          <span className="text-gray-400 text-lg font-normal mr-4">
            Publishers
          </span>
        </div>
        <div className="absolute left-0 bottom-0 w-1/12 h-0.5 bg-orange-400"></div>
        <label className="inline-flex items-center cursor-pointer mt-3 md:mt-0">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-md flex flex-row font-normal text-gray-400">
            View selected
          </span>
        </label>
      </div>

      <div className="flex items-center justify-between w-full p-5 font-medium text-black border border-gray-200 focus:ring-4 focus:ring-gray-200">
        <div className="border border-gray-200 flex items-center justify-between w-full font-medium text-black focus:ring-4 focus:ring-gray-200">
          <div className="relative inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className="text-gray-200" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="">
        <ProductTable />
      </div>
    </>
  );
};

export default Search;
