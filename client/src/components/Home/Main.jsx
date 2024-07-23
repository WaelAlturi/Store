import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../../URL.js";
import {
  ShoppingCartIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/solid";

export default function Main({ Genre }) {
  const [data, setData] = useState([]);
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
      let response;
      if (Genre == null) {
        console.log("Check it Out1");
        response = await axios.get(URL.gamesData);
      } else {
        console.log("Check it Out2");
        response = await axios.get(`${URL.gamesData}${Genre}`);
      }
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addToCart = (gameData) => {
    try {
      axios
        .post(URL.addToCart, { gameData })
        .then(() => {
          console.log("ADD Game ");
        })
        .catch((e) => {
          console.log(e.message);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    Games();
  }, [Genre]);
  return (
    <article className=" w-full h-auto flex justify-center">
      <section className="w-full h-full">
        {data ? (
          <article className="grid grid-cols-5 gap-4 place-items-center place  h-full w-full">
            {data.map((item) => (
              <section
                key={item._id}
                className="w-4/5 h-80 flex items-center justify-center flex-col group shadow-2xl relative rounded-lg perspective-800 bg-neutral-800"
              >
                <div className="w-full h-full flex flex-col items-center transform duration-1000 group-hover:rotate-y-180 group-hover:blur-md ">
                  <img src={item.image} className="w-full h-5/6" />
                  <p className="w-full h-1/6 flex items-center justify-around text-center justify-items-center">
                    <span className="w-3/6 text-textColor text-sm">
                      {item.name}
                    </span>
                    <span className="w-1/6  text-textColor text-sm">
                      ${item.price}
                    </span>
                  </p>
                </div>
                <div className=" w-full h-full transform backface-hidden duration-1000 -rotate-y-180 group-hover:rotate-y-0 absolute">
                  <span className=" w-full h-5/6 flex items-center justify-center text-center text-indigo-600 border border-neutral-950 rounded-lg">
                    {item.description}
                  </span>
                  <article className=" w-full h-1/6 flex items-end justify-end ">
                    <p className="flex items-center justify-center w-full h-16 pl-2 bg-transparent">
                      <span
                        className=" group/icon h-10 w-5/6 rounded-lg flex justify-center items-center bg-neutral-700 text-white border border-stone-600 hover:bg-neutral-500 cursor-pointer duration-700"
                        onClick={() => addToCart(item)}
                      >
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
