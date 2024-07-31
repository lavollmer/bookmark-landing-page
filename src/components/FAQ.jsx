import React from "react";
import { useState } from "react";
import Plus from "../assets/icon-arrow.svg";
import Minus from "../assets/icon-close.svg";

//Log paths to the console
console.log("../assets/icon-close.svg", Minus);
console.log("../assets/icon-arrow.svg", Plus);

const FAQ = () => {
  //initializes a state variable named "active" and a function to update it as "setActive" using the useState hook, intial value is set to false
  const [active, setActive] = useState(false);

  //initializes a state variable named "activeId" and a function to update it as "setActiveId" using the useState hook, intial value is set to null
  const [activeId, setActiveId] = useState(null);

  //array of data to be displayed in the FAQ section that contains objects
  const data = [
    {
      intro: "What is Bookmark?",
      pg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
      id: 1,
    },
    {
      intro: "How can I request a new browser?",
      pg: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
      id: 2,
    },
    {
      intro: "Is there a mobile app?",
      pg: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum. ",
      id: 3,
    },
    {
      intro: "What about other Chromium browsers? ",
      pg: " Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
      id: 4,
    },
  ];

  return (
    <div className="m-10">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-3xl font-bold text-very-dark-blue">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      {/* iterate over each item in the data array */}
      <div className="flex flex-col justify-start space-y-4 text-very-dark-blue mb-10 p-10 md:p-40">
        {data.map((item) => {
          // check if the activeId is equal to the item.id
          const isActive = activeId === item.id;
          return (
            // for each item, create a div element with all information from array to be displayed
            <div
              key={item.id}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <div className="flex flex-row items-center justify-between w-full">
                <button
                  // if the activeId is equal to the item.id, set the active state to true, else set it to false
                  onClick={() => setActiveId(isActive ? null : item.id)}
                  className="flex flex-row justify-between items-center w-full text-left text-lg font-bold"
                >
                  {item.intro}
                  {/* if active is true then show Minus sign otherwise show plus sign */}
                  <img src={isActive ? Minus : Plus} alt="icon" />
                </button>
              </div>
              <hr className="w-full border-gray-300" />
              <div className={isActive ? "block" : "hidden"}>
                <p className="text-gray-500">{item.pg}</p>
              </div>
            </div>
          );
        })}
        <div className="flex flex-col items-center text-center justify-center">
          <button className="box-shadow  bg-soft-blue text-white rounded-md text-md py-3 md:text-lg md:py-3 px-2 md:px-4 ">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
