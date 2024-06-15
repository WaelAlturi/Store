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
          className="w-5/6 h-96 bg-slate-500 flex items-center justify-end flex-col group shadow-xl animate-pulse p-5"
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
    <article className=" w-full h-auto flex justify-center">
      <section className="w-full h-full overflow-y-hidden">
        {data ? (
          <article className="grid grid-cols-4 gap-4 place-items-center place  h-full w-full">
            {data.map((item) => (
              <section
                key={item}
                className="w-5/6 h-full flex items-center justify-center flex-col group shadow-2xl relative rounded-lg perspective-800 bg-neutral-800"
              >
                <div className="w-full h-full flex flex-col items-center transform duration-1000 group-hover:rotate-y-180 group-hover:blur-md ">
                  <img src={item.image} className="w-full h-full" />
                  <p className="w-full h-20 flex items-center justify-around">
                    <span className="text-textColor text-xl">{item.name}</span>
                    <span className="text-textColor text-xl">
                      ${item.price}
                    </span>
                  </p>
                </div>
                <div className=" w-full h-full transform backface-hidden duration-1000 -rotate-y-180 group-hover:rotate-y-0 absolute">
                  <article className=" w-full h-full flex items-end justify-end ">
                    <p className="flex items-center justify-center w-full h-16 pl-2 bg-transparent">
                      <span className=" group/icon h-10 w-5/6 rounded-lg flex justify-center items-center bg-neutral-700 text-white border border-stone-600 hover:bg-neutral-500 cursor-pointer duration-700">
                        ADD TO CART
                      </span>
                      <span className=" group/icon h-14 w-2/6 rounded-xl flex justify-center items-center bg-transparent">
                        <ShoppingCartIcon className=" size-8 backface-hidden text-textColor " />
                      </span>
                    </p>
                  </article>
                </div>
              </section>
            ))}
          </article>
        ) : (
          <div className="grid grid-cols-4 gap-5 place-items-center p-5">
            {sectionsLoading(20)}
          </div>
        )}
      </section>
    </article>
  );
}
