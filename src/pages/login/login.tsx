import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
//right-panel-active
const Login = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] login-background">
      <div className="w-full max-w-xs   ">
        <div className="text-4xl p-5 font-colour-login text-center">Login</div>
        <form className="bg-white shadow-lg h-96  flex flex-col justify-evenly rounded px-8 pt-6 pb-8 mb-4">
          <div>
            <label className="block font-colour-login text-sm font-bold mb-2 ">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="block font-colour-login text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic"></p>
          </div>
          <div>
            <button
              className="background-colour-button-login  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
          <div className="text-center font-colour-login ">
            Do you have an account already ?{" "}
            <Link className="underline" to="/register">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
