/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

const InventoryInsightChart = ({ title, value, yAxisLabel, data, options }) => (
  <div className="mb-4 p-4 border-b">
    <div className="flex flex-col md:flex-row items-start justify-between">
      <div className="mb-4 md:mb-0">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-3xl font-bold text-orange-500">{value}</div>
      </div>
      <div className="flex-grow md:ml-8">
        <Line data={data} options={options} height={80} />
      </div>
    </div>
  </div>
);

const InventoryInsights = () => {
  const availsData = {
    labels: ["04 Jul", "06 Jul", "08 Jul", "10 Jul"],
    datasets: [
      {
        data: [180, 180, 180, 180], // Adjust these values as needed
        borderColor: "#1e40af",
        backgroundColor: "rgba(30, 64, 175, 0.1)",
        fill: true,
        tension: 0,
      },
    ],
  };

  const medianCPMData = {
    labels: ["5%", "25%", "50%", "75%", "95%"],
    datasets: [
      {
        data: [0.1, 0.2, 0.3, 0.5, 3.5], // Adjust these values as needed
        borderColor: "#1e40af",
        backgroundColor: "rgba(30, 64, 175, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          color: "#e2e8f0",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const lineData = {
    labels: ["Jul 4", "Jul 5", "Jul 6", "Jul 7", "Jul 8", "Jul 9", "Jul 10"],
    datasets: [
      {
        label: "Avails",
        data: [0, 0, 0, 1.02, 1.02, 1.02, 1.02],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: false,
        },
      },
    },
  };

  const doughnutData = (labels, data, colors) => ({
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  });

  return (
    <div className=" w-full bg-white border">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 p-4 bg-white border-b">
        <div className="text-2xl font-normal mb-2 md:mb-0 md:mr-4">
          Inventory Insights
        </div>
        <div className="flex items-center">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-l px-4 py-2 pr-8 focus:outline-none focus:border-blue-500">
              <option>Custom</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center border border-l-0 border-gray-300 rounded-r px-4 py-2 mt-2 md:mt-0">
            <span className="mr-2">Jul 4, 2024 → Jul 10, 2024</span>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="ml-2 mt-2 md:mt-0">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <InventoryInsightChart
          title="Avails"
          value="1.02T"
          yAxisLabel="200B"
          data={availsData}
          options={{
            ...chartOptions,
            scales: {
              ...chartOptions.scales,
              y: {
                ...chartOptions.scales.y,
                max: 200,
              },
            },
          }}
        />
        <InventoryInsightChart
          title="Median CPM"
          value="€0.34"
          yAxisLabel="€4.00"
          data={medianCPMData}
          options={{
            ...chartOptions,
            scales: {
              ...chartOptions.scales,
              y: {
                ...chartOptions.scales.y,
                max: 4,
              },
            },
          }}
        />
      </div>

      <div className="mb-4 p-4">
        <div className="flex items-center justify-between">
          <div>Display creative sizes</div>
          <a href="#" className="text-sm text-blue-500">
            See all sizes
          </a>
        </div>
        <div className="w-full h-2 bg-gray-200 my-2 flex">
          <div
            className="h-full bg-orange-500"
            style={{ width: "27.84%" }}
          ></div>
          <div className="h-full bg-gray-600" style={{ width: "20.89%" }}></div>
          <div
            className="h-full bg-yellow-500"
            style={{ width: "10.73%" }}
          ></div>
          <div className="h-full bg-blue-800" style={{ width: "5.50%" }}></div>
          <div className="h-full bg-blue-400" style={{ width: "2.81%" }}></div>
          <div className="h-full bg-gray-400" style={{ width: "32.23%" }}></div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-orange-500 mr-1"></span>
            320 × 50
            <span className="ml-1 text-gray-500">27.84% (€0.30)</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-gray-600 mr-1"></span>
            300 × 250
            <span className="ml-1 text-gray-500">20.89% (€0.32)</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-yellow-500 mr-1"></span>
            728 × 90
            <span className="ml-1 text-gray-500">10.73% (€0.30)</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-blue-800 mr-1"></span>
            300 × 600
            <span className="ml-1 text-gray-500">5.50% (€0.49)</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-blue-400 mr-1"></span>
            320 × 100
            <span className="ml-1 text-gray-500">2.81% (€0.33)</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-gray-400 mr-1"></span>
            Others
            <span className="ml-1 text-gray-500">32.23%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2  bg-white">
        <div className="border p-4">
          <div className="flex items-center mb-2">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
              />
            </svg>
            <span className="font-semibold">Country</span>
          </div>
          <Doughnut
            data={doughnutData(
              [
                "United States",
                "France",
                "Germany",
                "Brazil",
                "Spain",
                "Other",
              ],
              [30, 20, 15, 10, 5, 20],
              ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#E7E9ED"]
            )}
            options={{
              plugins: {
                legend: {
                  position: "right",
                  labels: {
                    boxWidth: 10,
                    padding: 15,
                  },
                },
              },
              cutout: "60%",
            }}
          />
        </div>

        <div className="border p-4">
          <div className="flex items-center mb-2">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="font-semibold">Device</span>
          </div>
          <Doughnut
            data={doughnutData(
              [
                "Smartphone",
                "Desktop",
                "Tablet",
                "Smart TV",
                "Set-top box",
                "Other",
              ],
              [50, 25, 15, 5, 3, 2],
              ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#E7E9ED"]
            )}
            options={{
              plugins: {
                legend: {
                  position: "right",
                  labels: {
                    boxWidth: 10,
                    padding: 15,
                  },
                },
              },
              cutout: "60%",
            }}
          />
        </div>

        <div className="border p-4">
          <div className="flex items-center mb-2">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span className="font-semibold">Environment</span>
          </div>
          <Doughnut
            data={doughnutData(
              ["App", "Mobile Web", "Web"],
              [40, 35, 25],
              ["#FF6384", "#36A2EB", "#FFCE56"]
            )}
            height={5}
            options={{
              plugins: {
                legend: {
                  position: "right",
                  labels: {
                    boxWidth: 10,
                    padding: 15,
                  },
                },
              },
              cutout: "60%",
            }}
          />
        </div>

        <div className="border p-4">
          <div className="flex items-center mb-2">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
            <span className="font-semibold">Ad format type</span>
          </div>
          <Doughnut
            data={doughnutData(
              ["Display", "Video Out", "Video In", "Native", "Audio"],
              [60, 15, 15, 8, 2],
              ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]
            )}
            height={5}
            options={{
              plugins: {
                legend: {
                  position: "right",
                  labels: {
                    boxWidth: 10,
                    padding: 15,
                  },
                },
              },
              cutout: "60%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InventoryInsights;
