import { IoEarthSharp } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const ProductTable = () => {
  const products = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      accessories: "Yes",
      available: "Yes",
      price: "$2999",
      weight: "3.0 lb.",
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      accessories: "No",
      available: "Yes",
      price: "$1999",
      weight: "1.0 lb.",
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      accessories: "Yes",
      available: "No",
      price: "$99",
      weight: "0.2 lb.",
    },
    {
      name: "Apple Watch",
      color: "Black",
      category: "Watches",
      accessories: "Yes",
      available: "No",
      price: "$199",
      weight: "0.12 lb.",
    },
    {
      name: "Apple iMac",
      color: "Silver",
      category: "PC",
      accessories: "Yes",
      available: "Yes",
      price: "$2999",
      weight: "7.0 lb.",
    },
    {
      name: "Apple AirPods",
      color: "White",
      category: "Accessories",
      accessories: "No",
      available: "Yes",
      price: "$399",
      weight: "38 g",
    },
    {
      name: "iPad Pro",
      color: "Gold",
      category: "Tablet",
      accessories: "No",
      available: "Yes",
      price: "$699",
      weight: "1.3 lb.",
    },
    {
      name: "Magic Keyboard",
      color: "Black",
      category: "Accessories",
      accessories: "Yes",
      available: "Yes",
      price: "$99",
      weight: "453 g",
    },
    {
      name: "Apple TV 4K",
      color: "Black",
      category: "TV",
      accessories: "Yes",
      available: "No",
      price: "$179",
      weight: "1.78 lb.",
    },
    {
      name: "AirTag",
      color: "Silver",
      category: "Accessories",
      accessories: "Yes",
      available: "No",
      price: "$29",
      weight: "53 g",
    },
  ];

  return (
    <div className="relative w-full shadow-md sm:rounded-lg overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-900 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center"></div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex flex-row">
                <span className="mr-1 text-base font-extrabold">DOMAINS</span>
                <FaMinus className="ml-1 mt-1.5" />
              </div>
            </th>

            <th scope="col" className="px-6 py-3">
              <div className="flex flex-row justify-end">
                <FaArrowDown className="mr-1 mt-1.5" />
                <span className="ml-1 text-base font-extrabold">AVAILS</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className="bg-white border-b hover:bg-gray-50"
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-search-${index}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor={`checkbox-table-search-${index}`}
                    className="sr-only"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap"
              >
                <div className="flex flex-row">
                  <IoEarthSharp className="mt-0.5 mr-1" />
                  {product.name}
                </div>
              </th>
              <td className="px-6 py-4 flex flex-row justify-end">
                {product.color}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
