/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

function Register() {
  return (
    <div className="flex items-center justify-center register-background h-[100vh]">
      <div className="w-full max-w-xs   ">
        <div className="text-4xl p-5 font-colour-login text-center">
          Register
        </div>
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
              Email
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="Email"
              placeholder="Email"
            />
            <p className="text-red-500 text-xs italic" />
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
            <p className="text-red-500 text-xs italic" />
          </div>
          <div className="mb-3 ">
            <button
              className="background-colour-button-login text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Register
            </button>
          </div>
          <div className="text-center font-colour-login  ">
            Already Registered ?
            {' '}
            <Link className="underline" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
