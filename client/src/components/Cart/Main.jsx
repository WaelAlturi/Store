import axios from "axios";
import URL from "../../URL.js";
import { useState, useEffect } from "react";

export default function Main() {
  const [data, setData] = useState(null);
  const inCart = async () => {
    try {
      const response = await axios.get(URL.inCart);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteItem = async (id) => {
    try {
      await axios.delete(`${URL.deleteItem}/${id}`);
      console.log("Delete Data ");
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    inCart();
  }, []);
  return (
    <article className=" w-full h-auto flex justify-center">
      <section className="w-full h-full overflow-y-hidden">
        {data ? (
          <article className="flex flex-col items-center justify-center w-full h-full">
            {data.map((item) => (
              <section
                key={item._id}
                className="w-2/5 h-1/2 bg-neutral-800  flex justify-center items-center mb-10"
              >
                <div className="w-1/6 h-28 bg-white">
                  <img src={item.image} className="w-full h-full bg-cover" />
                </div>
                <p className="w-5/6 flex justify-around items-center">
                  <span className="text-xl text-textColor">{item.name}</span>
                  <span className="flex justify-center items-center flex-col">
                    <span className="text-xl text-textColor">
                      ${item.price}
                    </span>
                    <span
                      onClick={() => {
                        deleteItem(item._id);
                      }}
                      className="text-neutral-500 underline cursor-pointer"
                    >
                      Remove
                    </span>
                  </span>
                </p>
              </section>
            ))}
          </article>
        ) : (
          <div className="grid grid-cols-4 gap-5 place-items-center p-5"></div>
        )}
      </section>
    </article>
  );
}
