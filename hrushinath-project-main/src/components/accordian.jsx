import { useState } from "react";
import { MdOutlineMonitor } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";
import { MdInventory2 } from "react-icons/md";
import { RiLayout3Fill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

const Accordion = () => {
  const [openSections, setOpenSections] = useState([0]);

  const toggleSection = (index) => {
    setOpenSections((prevOpenSections) =>
      prevOpenSections.includes(index)
        ? prevOpenSections.filter((i) => i !== index)
        : [...prevOpenSections, index]
    );
  };

  const accordionData = [
    {
      title: (
        <>
          <div className="flex flex-row">
            <TbWorldSearch className="mt-0.5 mr-1 text-xl" />
            Geolocation
          </div>
        </>
      ),
      content: (
        <>
          <p className="mb-2 text-black ">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-black ">
            Check out this guide to learn how to{" "}
            <a
              href="/docs/getting-started/introduction/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </>
      ),
      icon: (
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      ),
    },
    {
      title: (
        <>
          <div className="flex flex-row">
            <MdInventory2 className="mt-0.5 mr-1 text-xl" />
            Inventory
          </div>
        </>
      ),
      content: (
        <>
          <p className="mb-2 text-black ">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p className="text-black ">
            Check out the{" "}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </>
      ),
      icon: (
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      ),
    },
    {
      title: (
        <>
          <div className="flex flex-row">
            <RiLayout3Fill className="mt-0.5 mr-1 text-xl" />
            Ad format
          </div>
        </>
      ),
      content: (
        <>
          <p className="mb-2 text-black ">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-black ">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p className="mb-2 text-black ">
            Learn more about these technologies:
          </p>
          <ul className="ps-5 text-black list-disc ">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </>
      ),
      icon: (
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      ),
    },
    {
      title: (
        <>
          <div className="flex flex-row">
            <FaShoppingCart className="mt-0.5 mr-1 text-xl" />
            Data marketplace
          </div>
        </>
      ),
      content: (
        <>
          <p className="mb-2 text-black ">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-black ">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p className="mb-2 text-black ">
            Learn more about these technologies:
          </p>
          <ul className="ps-5 text-black list-disc ">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </>
      ),
      icon: (
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border  border-gray-200 border-b-0 focus:ring-4 focus:ring-gray-200  hover:bg-gray-100  gap-3bg-gray-100  ">
        
        <span className="text-2xl">
        Targeting
        </span>
        
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-md flex flex-row font-medium text-black ">
            <MdOutlineMonitor className="mt-1 mx-1 text-lg" />
            CTV
          </span>
        </label>
      </div>

      <div id="accordion-arrow-icon" data-accordion="open">
        {accordionData.map((section, index) => (
          <div key={index}>
            <h2 id={`accordion-arrow-icon-heading-${index + 1}`}>
              <button
                type="button"
                className={`flex items-center justify-start w-full p-5 font-medium rtl:text-right text-black border ${
                  index === 0
                    ? "border-b-0 border-gray-200 "
                    : index === accordionData.length - 1
                    ? "border-gray-200"
                    : "border-b-0 border-gray-200"
                } focus:ring-4 focus:ring-gray-200   hover:bg-gray-100  gap-3 ${
                  index === 0 ? " text-gray-900  " : ""
                }`}
                onClick={() => toggleSection(index)}
                // aria-expanded={openSections.includes(index)}
                // aria-controls={`accordion-arrow-icon-body-${index + 1}`}
              >
                {section.icon}
                <span>{section.title}</span>
              </button>
            </h2>
            <div
              id={`accordion-arrow-icon-body-${index + 1}`}
              className={openSections.includes(index) ? "" : "hidden"}
              aria-labelledby={`accordion-arrow-icon-heading-${index + 1}`}
            >
              <div
                className={`p-5 border ${
                  index === accordionData.length - 1
                    ? "border-t-0"
                    : "border-b-0"
                } border-gray-200`}
              >
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
