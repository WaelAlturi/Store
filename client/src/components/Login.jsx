import { useState } from "react";
import axios from "axios";
import URL from "../URL.js";
import { useNavigate } from "react-router-dom";
import "material-icons/iconfont/material-icons.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const Login = () => {
    try {
      if (email && password) {
        axios
          .post(URL.login, { email, password })
          .then(() => {
            navigate("/");
          })
          .catch(() => {
            console.log("BYE ");
          });
      } else {
        console.log("All input Requier");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="flex min-h-screen flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <section className="flex justify-center items-center flex-col sm:mx-auto sm:w-full sm:max-w-sm">
        <span className=" h-10 w-auto text-5xl material-icons">games</span>
        <h2 className="mt-10 text-center text-2xl font-bold text-gray-900">
          Sign in to your account
        </h2>
      </section>
      <section className="mt-12 sm:mx-auto sm:w-1/2 sm:max-w-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-6"
        >
          <div className="group">
            <label
              className={`absolute text-m text-gray-900 transition duration-500 ease-out ${
                email ? "-translate-y-6" : "group-focus-within:-translate-y-6"
              }`}
            >
              Email:
            </label>
            <input
              type="email"
              autoComplete="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="relative w-full text-gray-900 border-b-2 placeholder:text-black border-black bg-transparent focus:placeholder-transparent focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
          <div className="group pt-5">
            <label
              className={`absolute text-m text-gray-900 transition duration-500 ease-out ${
                password
                  ? "-translate-y-6"
                  : "group-focus-within:-translate-y-6"
              }`}
            >
              Password:
            </label>
            <input
              type="password"
              autoComplete="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="relative  w-full text-gray-900 border-b-2 placeholder:text-black border-black bg-transparent focus:placeholder-transparent focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={Login}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 "
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-black">
          Don't have an account sign up?
          <a href="/register" className=" text-gray-600 cursor-pointer">
            SignUp
          </a>
        </p>
      </section>
    </main>
  );
}
