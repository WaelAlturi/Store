import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../../URL.js";
import LoadingAnimation from "../LoadingAnimation.jsx";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Main({ showCart, setShowCart }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  let total = 0;

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
      inCart();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    inCart();
    if (data != null) {
      data.map((product) => {
        total += product.price;
      });
      setSubtotal(total);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000); // 5 seconds
    }
  }, [data]);

  return (
    <Dialog
      open={showCart}
      onClose={() => setShowCart(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black opacity-30"
      />
      <div className="fixed inset-0">
        <div className="absolute inset-0">
          {data && data.length !== 0 ? (
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 ">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700 "
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-gradient-to-l from-primary to-neutral-700 shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-300">
                        Shopping cart
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setShowCart(false)}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-500"
                        >
                          {data.map((product) => (
                            <li key={product._id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden border  rounded-xl  ">
                                <img
                                  src={product.image}
                                  className="h-full w-full object-cover rounded-xl"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-300">
                                    <h3>
                                      <a>{product.name}</a>
                                    </h3>
                                    <p className="ml-4">${product.price}</p>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-red-400 hover:text-gray-200"
                                      onClick={() => {
                                        deleteItem(product._id);
                                      }}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-600 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-300">
                      <p>Subtotal</p>
                      <p>${subtotal}</p>
                    </div>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-6 py-3 font-medium text-white shadow-sm hover:bg-gray-700"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        <button
                          type="button"
                          onClick={() => setShowCart(false)}
                          className="font-medium text-gray-200 hover:text-gray-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full text-red-600 bg-black opacity-80">
              {isLoading ? (
                <LoadingAnimation />
              ) : (
                <span className="text-7xl">Cart Is Empty</span>
              )}
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}
