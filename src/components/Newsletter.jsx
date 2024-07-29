import React from "react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      console.log("Email is valid");
    } else {
      setError("Please enter a valid email address");
    }
  };

  return (
    <div className="bg-soft-blue p-10 flex flex-col items-center justify-center text-center font-rubik">
      <div className="flex flex-col space-y-4 text-white">
        <h1 className="text-lg">35,000+ ALREADY JOINED</h1>
        <h2 className="text-2xl">Stay up-to-date with what we’re doing</h2>
      </div>
      <div>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="name@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900 rounded-lg w-full py-3 px-4"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button
            type="submit"
            className="bg-soft-red font-bold text-white rounded-md text-md py-4 md:text-lg md:py-3 px-4 mt-4"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
