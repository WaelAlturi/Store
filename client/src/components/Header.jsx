import "material-icons/iconfont/material-icons.css";
import logo from "../assets/logo.png";
export default function Header() {
  return (
    <>
      <ul className="w-full h-full flex items-center justify-around">
        <li className=" ml-4 transition ease-in-out duration-500 hover:text-cyan-50 ">
          <a href="/" className=" h-10 w-auto text-5xl">
            <img className="w-10 h-15 " src={logo} />
          </a>
        </li>
        <ul className="flex items-center justify-around text-lg">
          <li className="mr-10 transition ease-in-out duration-500 underline text-cyan-50 hover:-translate-y-2 ">
            <a href="/">Home</a>
          </li>
          <li className=" mr-10 transition ease-in-out duration-500 text-cyan-50 hover:-translate-y-2 ">
            <a href="/cart">Cart</a>
          </li>
          <li className="mr-10 transition ease-in-out duration-500 text-cyan-50 hover:-translate-y-2 ">
            <a href="/login">Logout</a>
          </li>
        </ul>
      </ul>
    </>
  );
}
