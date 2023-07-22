import React, { useState } from "react";
import Image from "next/image";
import Translate from "./Translate"; // Assuming Translate.js is in the same directory

export default function Home() {
  // State to keep track of the currently selected navigation item
  const [selectedNavItem, setSelectedNavItem] = useState("stats");

  // Function to handle navigation item selection
  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
  };

  // State to keep track of the currently selected accordion item
  const [selectedAccordion, setSelectedAccordion] = useState(null);

  // Function to toggle the accordion item
  const toggleAccordion = (index) => {
    if (selectedAccordion === index) {
      setSelectedAccordion(null); // If the same item is clicked, close it
    } else {
      setSelectedAccordion(index); // If a different item is clicked, open it
    }
  };

  return (
    <main className="flex min-h-screen items-stretch p-0 m-0 latin">
      {/* Side Navigation Bar */}
      <div className="h-screen flex flex-col items-center justify-start space-y-4 p-4 bg-gray-200 w-40">
        <h2 className="text-xl font-bold text-black">NewWarden</h2>
        <button
          onClick={() => handleNavItemClick("stats")}
          className={`w-full text-blue-500 px-4 py-2 rounded-md ${
            selectedNavItem === "stats" ? "bg-blue-200" : ""
          }`}
        >
          Stats
        </button>
        {/* Add more menu items as needed */}
      </div>

      <div className="flex flex-col items-start space-y-2 flex-1 p-4">
        {/* Stats Section */}
        {selectedNavItem === "stats" && (
          <div className="stats shadow">
            {/* Stat */}
            <div className="stat place-items-center">
              <div className="stat-title">Total Blocked Contents</div>
              <div className="stat-value">31K</div>
              {/* <div className="stat-desc">From January 1st to February 1st</div> */}
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Number of Accounts</div>
              <div className="stat-value text-secondary">3</div>
              {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">New Registers</div>
              <div className="stat-value">1,200</div>
              {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
            </div>
            {/* Stat end */}
          </div>
        )}

        {/* Accordion */}
        <div className="space-y-2">
          <h1 className="text-3xl font-medium">Guide</h1>
          <div
            className="collapse collapse-arrow bg-base-200"
            onClick={() => toggleAccordion(0)}
          >
            <input
              type="radio"
              name="my-accordion-2"
              checked={selectedAccordion === 0}
            />
            <div className="collapse-title text-xl font-medium">
              <Translate text="Lorem ipsum dolor sit amet" />
            </div>
            <div
              className={`collapse-content ${
                selectedAccordion === 0 ? "block" : "hidden"
              }`}
            >
              <p>fahri</p>
            </div>
          </div>

          <div
            className="collapse collapse-arrow bg-base-200"
            onClick={() => toggleAccordion(1)}
          >
            <input
              type="radio"
              name="my-accordion-2"
              checked={selectedAccordion === 1}
            />
            <div className="collapse-title text-xl font-medium">
              <Translate text="Lorem ipsum dolor sit amet" />
            </div>
            <div
              className={`collapse-content ${
                selectedAccordion === 1 ? "block" : "hidden"
              }`}
            >
              <p>cabul</p>
            </div>
          </div>

          <div
            className="collapse collapse-arrow bg-base-200"
            onClick={() => toggleAccordion(2)}
          >
            <input
              type="radio"
              name="my-accordion-2"
              checked={selectedAccordion === 2}
            />
            <div className="collapse-title text-xl font-medium">
              <Translate text="Lorem ipsum dolor sit amet" />
            </div>
            <div
              className={`collapse-content ${
                selectedAccordion === 2 ? "block" : "hidden"
              }`}
            >
              <p>ajg</p>
            </div>
          </div>
        </div>
        {/* Accordion end */}
      </div>
    </main>
  );
}
