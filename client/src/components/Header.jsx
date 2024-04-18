import "material-icons/iconfont/material-icons.css";
export default function Header() {
  return (
    <>
      <ul className="w-full h-full flex items-center justify-around bg-gradient-to-r from-cyan-600 to-blue-600 ">
        <li className=" ml-4 transition ease-in-out duration-500 hover:text-cyan-50 ">
          <a href="/" className=" h-10 w-auto text-5xl material-icons">
            games
          </a>
        </li>
        <ul className="flex items-center justify-around mr-1 text-lg">
          <li className=" mr-10 transition ease-in-out duration-500 hover:text-cyan-50 hover:-translate-y-2 ">
            <a href="/cart">Cart</a>
          </li>
          <li className="mr-10 transition ease-in-out duration-500 hover:text-cyan-50 hover:-translate-y-2 ">
            <a href="/login">Logout</a>
          </li>
        </ul>
      </ul>
    </>
  );
}
