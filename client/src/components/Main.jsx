import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../URL.js";
import {
  ShoppingCartIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/solid";

export default function Main() {
  const [data, setData] = useState(null);
  const x = 20;
  // const [name, setName] = useState("");

  // const [image, setImage] = useState("");
  // const [description, seDescription] = useState("");
  const Games = async () => {
    try {
      const response = await axios.get(URL.gamesData);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Games();
  }, []);
  return (
    <main className=" w-full h-auto flex justify-center">
      <aside className="w-1/5 h-full flex justify-center border">
        asdaasdasd
      </aside>
      <section className=" overflow-x-hidden w-4/5">
        {data ? (
          <div className="grid grid-cols-4 gap-5 place-items-center p-5 ">
            {data.map((item) => (
              <section
                key={item}
                className="w-full h-5/6 flex items-center justify-center flex-col group shadow-2xl relative rounded-lg perspective-800"
              >
                <div className="w-full h-full text-center flex flex-col justify-end items-center transform duration-1000 group-hover:rotate-y-180 group-hover:blur-md  ring-4 ring-blue-600">
                  <img src={item.image} className="w-full h-full" />
                  <span className="absolute text-zinc-50 text-2xl">
                    {item.name}
                  </span>
                </div>
                <div className=" w-full h-full transform backface-hidden duration-1000 -rotate-y-180 group-hover:rotate-y-0 absolute">
                  <p className=" w-full h-full flex items-end justify-around p-1 ">
                    <span className=" group/icon h-14 w-2/6 rounded-xl flex justify-center items-center bg-transparent border border-stone-600 hover:bg-slate-50 cursor-pointer duration-700">
                      <ShoppingCartIcon className="size-10 backface-hidden transform duration-700 text-white group-hover/icon:text-black" />
                    </span>
                    <span className=" group/icon h-14 w-2/6 rounded-xl flex justify-center items-center bg-transparent border border-stone-600 hover:bg-slate-50 cursor-pointer duration-700">
                      <EllipsisHorizontalCircleIcon className="size-10 backface-hidden transform duration-700 text-white group-hover/icon:text-black" />
                    </span>
                  </p>
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </section>
    </main>
  );
}
