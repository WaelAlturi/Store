import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../URL.js";
import {
  ShoppingCartIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/solid";

export default function Main() {
  const [data, setData] = useState(null);
  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");
  // const [description, seDescription] = useState("");
  const sectionsLoading = (numSections) => {
    const sections = [];
    let i = 0;
    while (i < numSections) {
      sections.push(
        <section
          key={i}
          className="w-full h-80 bg-slate-500 flex items-center justify-end flex-col group shadow-xl animate-pulse p-5"
        >
          <div className="h-4 w-40 bg-slate-400 rounded-xl animate-pulse">
            <span></span>
          </div>
        </section>
      );
      i++;
    }

    return sections;
  };
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
    <main className=" w-full h-auto flex justify-center bg-slate-700">
      <aside className="w-1/5 h-full flex justify-center border">
        asdaasdasd
      </aside>
      <section className=" overflow-x-hidden w-4/5">
        {data ? (
          <div className="grid grid-cols-4 gap-5 place-items-center p-4 overflow-y-hidden ">
            {data.map((item) => (
              <section
                key={item._id}
                className="w-full h-full p-1 flex items-center justify-center flex-col group bg-slate-500 shadow-2xl rounded-lg perspective-800"
              >
                <div className="w-full h-full text-center flex flex-col justify-end items-center transform duration-1000 group-hover:rotate-y-180 group-hover:blur-md ">
                  <img
                    src={item.image}
                    className="w-full h-full ring-4 ring-blue-600"
                  />
                  <span className="mb-2 text-black-50 text-2xl">
                    ${item.price}
                  </span>
                  <span className=" text-black text-2xl">{item.name}</span>
                </div>
                <div className=" w-full h-full transform backface-hidden duration-1000 -rotate-y-180 group-hover:rotate-y-0 absolute">
                  <div className="w-full h-2/5 flex flex-col justify-center items-center text-lg">
                    <span className=" animate-bounce text-4xl text-white">
                      Genres
                    </span>
                    <p className="flex justify-center items-center">
                      {item.genres.map((i) => {
                        return (
                          <span className="flex justify-around items-center border p-2 border-stone-600 text-xl bg-slate-500">
                            {i}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                  <p className="w-full h-2/5 flex flex-col justify-center items-center">
                    <span className=" animate-bounce text-4xl text-white">
                      Price
                    </span>
                    <span className=" text-3xl text-green-200">
                      ${item.price}
                    </span>
                  </p>
                  <div className=" w-full h-1/5 flex items-end justify-around p-1 ">
                    <span className=" group/icon h-14 w-2/6 rounded-xl flex justify-center items-center bg-transparent border border-stone-600 hover:bg-slate-50 cursor-pointer duration-700">
                      <ShoppingCartIcon className="size-10 backface-hidden transform duration-700 text-black group-hover/icon:text-white" />
                    </span>
                    <span className=" group/icon h-14 w-2/6 rounded-xl flex justify-center items-center bg-transparent border border-stone-600 hover:bg-slate-50 cursor-pointer duration-700">
                      <EllipsisHorizontalCircleIcon className="size-10 backface-hidden transform duration-700 text-black group-hover/icon:text-white" />
                    </span>
                  </div>
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-5 place-items-center p-5">
            {sectionsLoading(20)}
          </div>
        )}
      </section>
    </main>
  );
}
