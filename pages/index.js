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
        <button
          onClick={() => handleNavItemClick("add_child")}
          className={`w-full text-blue-500 px-4 py-2 rounded-md ${
            selectedNavItem === "add_child" ? "bg-blue-200" : ""
          }`}
        >
          Add Child
        </button>
        <button
          onClick={() => handleNavItemClick("settings")}
          className={`w-full text-blue-500 px-4 py-2 rounded-md ${
            selectedNavItem === "settings" ? "bg-blue-200" : ""
          }`}
        >
          Settings
        </button>
        {/* Add more menu items as needed */}
      </div>

      <div className="flex flex-col items-center justify-start flex-1 p-4">
        {/* Stats Section */}
        {selectedNavItem === "stats" && (
          <>
            <div className="stats shadow rounded-lg p-8 text-center">
              {/* Stat */}
              <div className="stat">
                <div className="stat-title text-2xl font-bold">Total Blocked Contents</div>
                <div className="stat-value text-4xl font-bold">31K</div>
              </div>

              <div className="stat">
                <div className="stat-title text-2xl font-bold">Number of Accounts</div>
                <div className="stat-value text-4xl font-bold text-secondary">3</div>
              </div>

              <div className="stat">
                <div className="stat-title text-2xl font-bold">New Registers</div>
                <div className="stat-value text-4xl font-bold">1,200</div>
              </div>
              {/* Stat end */}
            </div>

            {/* Accordion */}
            <div className="w-full space-y-2">
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
          </>
        )}

        {/* Add Child Section */}
        {selectedNavItem === "add_child" && (
          <div className="add-child shadow rounded-lg p-8 text-center">
            {/* Add Child content */}
            <h1 className="text-3xl font-medium">Add Child Section</h1>
            <p>Add Child Form or Component can go here.</p>
          </div>
        )}

        {/* Settings Section */}
        {selectedNavItem === "settings" && (
          <div className="settings shadow rounded-lg p-8 text-center">
            {/* Settings content */}
            <h1 className="text-3xl font-medium mb-4">Settings Section</h1>
            <div className="flex items-center justify-center">
              <div className="w-48">
                <label htmlFor="intensity" className="text-lg font-medium">
                  Intensity
                </label>
                <input
                  type="range"
                  id="intensity"
                  name="intensity"
                  min={0}
                  max="100"
                  defaultValue={40} // Use defaultValue instead of value
                  className="range"
                />
                <div className="text-lg font-medium">40</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
