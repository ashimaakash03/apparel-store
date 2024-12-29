//import React from 'react'

import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <form className="flex flex-col items-center w-[90%] sm:w-[96%] m-auto mt-14 gap-4 text-gray-700">
      <div className="inline-flex items-center gap-3 mt-10 mb-2">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[2px] w-8 bg-gray-700" />
      </div>
      {currentState === "Sign In" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-[50%] px-3 py-2 border border-gray-700 rounded-lg"
          placeholder="John Doe"
          required
        />
      )}
      <input
        type="email"
        className="w-[50%] px-3 py-2 border border-gray-700 rounded-lg"
        placeholder="abc@xyz.com"
        required
      />
      <input
        type="password"
        className="w-[50%] px-3 py-2 border border-gray-700 rounded-lg"
        placeholder="password"
        required
      />
      <div className="w-[50%] flex justify-between text-sm mt-[10px]">
        <p className="cursor-pointer">Forgot Password?</p>
        {currentState === "Sign Up" ? (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Sign In")}
          >
            Sign In Here...
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Sign Up")}
          >
            Sign Up Here...
          </p>
        )}
      </div>
      <button className="cursor-pointer bg-black text-white px-8 py-4 mt-3 rounded-full">
        {currentState === "Sign In" ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default Login;
