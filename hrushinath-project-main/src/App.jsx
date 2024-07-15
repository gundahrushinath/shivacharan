import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Accordion from "./components/accordian";
import Search from "./components/search";
import { HiOutlinePlus } from "react-icons/hi";
import { BsQuestionCircle } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { IoMdPricetag } from "react-icons/io";
import InventoryInsights from "./components/insights";

import { useMediaQuery } from 'react-responsive'; 

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="flex flex-col lg:flex-row">
      {isDesktop && <Sidebar />}

      <div className="w-full">
        <Navbar />
        <hr className="h-px bg-gray-200 dark:bg-gray-700" />
        <div className="p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
            <div className="flex items-center mb-2 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl mr-2">Media Planning</h1>
              <IoIosInformationCircle className="text-blue-600" />
              <span className="text-sm ml-1 text-blue-600">Need help?</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <button className="flex items-center px-3 py-2 bg-orange-500 text-white mb-2 sm:mb-0 sm:mr-3">
                <IoMdPricetag className="mr-1" />
                Create a deal
              </button>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 p-2.5 w-full sm:w-24">
                <option selected>EUR (€)</option>
                <option value="US">USD ($)</option>
                <option value="CA">CAD ($)</option>
                <option value="FR">EUR (€)</option>
                <option value="DE">EUR (€)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/5 lg:pr-4 mb-4 lg:mb-0">
              <div className="mb-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full p-3.5 font-medium text-black border border-gray-200 hover:bg-gray-100 mb-4">
                  <div className="flex items-center mb-2 sm:mb-0">
                    Meal Deal
                    <BsQuestionCircle className="ml-2" />
                    <span className="text-xs ml-1 text-red-600">New</span>
                  </div>
                  <button className="flex items-center border border-gray-200 px-3 py-2">
                    <HiOutlinePlus className="mr-2" />
                    Add deal
                  </button>
                </div>
                <Accordion />
              </div>
              <Search />
            </div>
            <div className="w-full lg:w-2/5">
              <InventoryInsights />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
