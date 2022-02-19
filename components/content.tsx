import React from "react";

export default function Card() {
  return (
    <>
      <section>
        <div className="p-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5 mt-6">
          <div className="relative group  rounded-xl overflow-hidden shadow-xl shadow-gray-500 dark:shadow-gray-600 transform transition duration-500 hover:scale-110 dark:border-2 dark:border-gray-400">
            <img
              className="w-full"
              src="https://images-na.ssl-images-amazon.com/images/I/91Z2n5kuKlL.jpg"
              alt="Mountain"
            />

            <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
            <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-full group-hover:-inset-y-0">
              <div className="absolute w-full flex place-content-center">
                <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
                  Team work
                </p>
              </div>
              <div className="absolute w-full flex place-content-center bottom-1 p-1">
                <div className="bg-blue-600 dark:bg-blue-400 opacity-50 rounded-xl border-2 border-gray-700 dark:border-gray-400 h-24 w-full"></div>
              </div>
              <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">
                Buy
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        
      </section>
    </>
  );
}
