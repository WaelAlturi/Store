import { useState } from "react";
import axios from "axios";
import URL from "../URL.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "material-icons/iconfont/material-icons.css";
export default function Login() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const navigate = useNavigate();

  const Login = () => {
    try {
      if (email && password) {
        axios
          .post(URL.login, { email, password })
          .then(() => {
            setTimeout(() => {
              navigate("/");
            }, 500);
          })
          .catch(() => {
            toast.warning("The email address or password is incorrect", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              theme: "dark",
              transition: Zoom,
            });
          });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const newAccount = () => {
    try {
      if (fullName && email && password) {
        axios
          .post(URL.register, { fullName, email, password })
          .then(() => {
            toast.success("Successfully created new account", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              theme: "dark",
              transition: Zoom,
            });
            setTimeout(() => {
              navigate("/login");
            }, 1500);
          })
          .catch((e) => {
            toast.warning(e.message, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              theme: "dark",
              transition: Zoom,
            });
          });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="w-full h-screen flex justify-center items-center bg-gradient-to-t from-slate-50 to-slate-200">
      {status ? (
        <div className="lg:w-4/6 lg:h-4/6  xs:w-5/6 xs:h-4/6 flex justify-around items-center backdrop-blur-sm  rounded-xl shadow-2xl transition duration-500">
          <section
            className={`sm:w-1/2 sm:h-full xs:w-5/6 flex justify-center items-center flex-col ${
              isFirstLoad ? "animate-left" : ""
            }`}
          >
            <span className="h-10 w-auto lg:text-5xl sm:text-4xl xs:text-3xl material-icons">
              games
            </span>
            <h1 className="mt-10 text-center lg:text-4xl sm:text-3xl xs:text-xl font-bold text-gray-900">
              Sign In
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="space-y-6 mt-10 lg:w-1/2 sm:w-4/5 xs:w-5/6"
            >
              <div className="group">
                <label
                  className={`absolute text-m text-gray-900 transition duration-500 ease-out ${
                    email
                      ? "-translate-y-6"
                      : "group-focus-within:-translate-y-6"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className=" w-full text-gray-900 border-b-2 placeholder:text-black border-black bg-transparent focus:placeholder-transparent focus:outline-none text-md leading-7"
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
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="relative w-full text-gray-900 border-b-2 placeholder:text-black border-black bg-transparent focus:placeholder-transparent focus:outline-none text-md leading-7"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <button
                  type="submit"
                  onClick={Login}
                  className="flex w-1/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 "
                >
                  Sign in
                </button>
                <p className="mt-4 sm:hidden xs:block">
                  Don`t have account
                  <a
                    className=" text-sky-400"
                    onClick={() => setStatus(!status)}
                  >
                    * Signup
                  </a>
                </p>
              </div>
            </form>
          </section>
          <section
            className={`lg:w-1/2 lg:h-full sm:w-1/2 sm:h-full  max-sm:hidden space-y-10 flex justify-center items-center flex-col bg-indigo-800 rounded-r-lg rounded-l-large ${
              isFirstLoad
                ? "animate-right transform delay-1000 duration-500 ease-in-out "
                : ""
            }`}
          >
            <h1 className="text-center lg:text-4xl sm:text-3xl font-bold text-white">
              Hello,There!
            </h1>
            <p className=" text-gray-200 lg:text-md lg:ml-3 sm:ml-5">
              Register with your personal details to use all of site features
            </p>
            <button
              onClick={() => {
                setStatus(!status);
                !isFirstLoad ? setIsFirstLoad(true) : "";
              }}
              className="w-1/3 text-center border rounded-md text-white p-2  "
            >
              Sign Up
            </button>
          </section>
        </div>
      ) : (
        <div className="lg:w-4/6 lg:h-4/6  xs:w-5/6 xs:h-4/6 flex flex-row-reverse justify-around items-center backdrop-blur-sm rounded-xl  shadow-2xl">
          <section className="sm:w-1/2 sm:h-full xs:w-5/6 h-full flex justify-center items-center flex-col animate-right  ">
            <span className=" h-10 w-auto lg:text-5xl sm:text-4xl xs:text-3xl material-icons">
              games
            </span>
            <h1 className="mt-10 text-center lg:text-4xl sm:text-3xl xs:text-xl font-bold text-gray-900">
              Sign In
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="space-y-6 mt-10 lg:w-1/2 sm:w-4/5 xs:w-5/6"
            >
              <div className="group">
                <label
                  className={`absolute text-m text-gray-900 transition duration-500 ease-out ${
                    fullName
                      ? "-translate-y-6"
                      : "group-focus-within:-translate-y-6"
                  }`}
                >
                  FullName
                </label>
                <input
                  type="text"
                  autoComplete="FullName"
                  required
                  onChange={(e) => setFullName(e.target.value)}
                  className="relative w-full text-gray-900 border-b-2 placeholder:text-black border-black bg-transparent focus:placeholder-transparent focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div className="group pt-5">
                <label
                  className={`absolute text-m text-gray-900 transition duration-500 ease-out ${
                    email
                      ? "-translate-y-6"
                      : "group-focus-within:-translate-y-6"
                  }`}
                >
                  Email
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
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="relative  w-full text-gray-900 border-b-2 placeholder:text-black border-black bg-transparent focus:placeholder-transparent focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <button
                  type="submit"
                  onClick={newAccount}
                  className="flex w-1/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 "
                >
                  Sign Up
                </button>
                <p className="mt-4 sm:hidden xs:block">
                  Do you have account
                  <a
                    className=" text-sky-400"
                    onClick={() => setStatus(!status)}
                  >
                    * SignIn
                  </a>
                </p>
              </div>
            </form>
          </section>
          <section className="lg:w-1/2 lg:h-full sm:w-1/2 sm:h-full  max-sm:hidden space-y-10 flex justify-center items-center flex-col bg-indigo-800 rounded-lg rounded-r-large animate-left transform delay-1000 duration-500 ease-in-out">
            <h1 className="text-center lg:text-4xl sm:text-3xl font-bold text-white">
              Welcome Back!
            </h1>
            <p className=" text-gray-200 lg:text-md lg:ml-3 sm:ml-5">
              Enter your personal details to use all of site features
            </p>
            <button
              onClick={() => {
                setStatus(!status);
              }}
              className="w-1/3 text-center border rounded-md text-white p-2"
            >
              Sign In
            </button>
          </section>
        </div>
      )}
      <ToastContainer />
    </main>
  );
}
