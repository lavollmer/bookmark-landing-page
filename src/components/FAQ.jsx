import React from 'react'
import { useState } from 'react'
import Plus from '../assets/icon-arrow.svg'
import Minus from '../assets/icon-close.svg'

const FAQ = () => {
    //initializes a state variable named "active" and a function to update it as "setActive" using the useState hook, intial value is set to false
    const [active, setActive] = useState(false);

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
    <div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <p className="text-gray-500">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        {data.map((item) => {
          return (
            <div key={item.id} className="flex flex-col items-center justify-center space-y-4">
              <div className="flex flex-row items-center justify-between w-full">
                <button onClick={() => setActive(!active)} className="w-full text-left text-lg font-bold">{item.intro}</button>
                <img src={active ? Minus : Plus} alt="icon" />
              </div>
              <div className={active ? "block" : "hidden"}>
                <p className="text-gray-500">{item.pg}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default FAQ