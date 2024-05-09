import React, { useState } from "react";

import { Stars } from "../components/Stars";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import img1 from "../assets/slider1.jpg";

import {
  faClock,
  faHeart as faHeartRegular,
  faHeart as faHeartSolid,
} from "@fortawesome/free-regular-svg-icons";

export const RecipeList = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  const rating = 2;

  return (
    <div>
      <div class="font-sans">
        <div class="mt-4 bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
          <input
            type="email"
            placeholder="Search Something..."
            class="w-full outline-none bg-white pl-4 text-sm"
          />
          <button
            type="button"
            class="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5">
            Search
          </button>
        </div>
        <div class="py-4 mx-auto lg:max-w-6xl md:max-w-4xl">
          <h2 class="text-4xl font-extrabold text-gray-800 text-center mb-12">
            Top Recipes
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-10">
            
            <div class="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              
              <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <div className="flex justify-end mt-2">
                  <FontAwesomeIcon
                    icon={isFavourite ? faHeartSolid  : faHeartRegular} 
                     
                    className={` ${isFavourite ? "text-red-500" : "text-grey" } cursor-pointer text-2xl`}
                    onClick={toggleFavourite}
                  />
                </div>
                <img
                  src={img1}
                  alt="product1"
                  class="h-full w-full object-contain"
                />
              </div>

              <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              
                <div class="text-center">
                  <h3 class="text-[20px] font-bold text-[#101010]">Momo</h3>

                  <h4 class="text-lg text-[#3d3b3b] font-bold mt-2">
                    <FontAwesomeIcon icon={faClock} /> 10 mins
                  </h4>
                </div>

                <div class="flex justify-center space-x-1 mt-4">
                  <Stars rating={rating} />
                </div>

                
              </div>
            </div>

            <div class="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              
              <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <div className="flex justify-end mt-2">
                  <FontAwesomeIcon
                    icon={isFavourite ? faHeartSolid  : faHeartRegular} 
                     
                    className={` ${isFavourite ? "text-red-500" : "text-grey" } cursor-pointer text-2xl`}
                    onClick={toggleFavourite}
                  />
                </div>
                <img
                  src={img1}
                  alt="product1"
                  class="h-full w-full object-contain"
                />
              </div>

              <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              
                <div class="text-center">
                  <h3 class="text-[20px] font-bold text-[#101010]">Momo</h3>

                  <h4 class="text-lg text-[#3d3b3b] font-bold mt-2">
                    <FontAwesomeIcon icon={faClock} /> 10 mins
                  </h4>
                </div>

                <div class="flex justify-center space-x-1 mt-4">
                  <Stars rating={rating} />
                </div>

                
              </div>
            </div>

            <div class="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              
              <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <div className="flex justify-end mt-2">
                  <FontAwesomeIcon
                    icon={isFavourite ? faHeartSolid  : faHeartRegular} 
                     
                    className={` ${isFavourite ? "text-red-500" : "text-grey" } cursor-pointer text-2xl`}
                    onClick={toggleFavourite}
                  />
                </div>
                <img
                  src={img1}
                  alt="product1"
                  class="h-full w-full object-contain"
                />
              </div>

              <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              
                <div class="text-center">
                  <h3 class="text-[20px] font-bold text-[#101010]">Momo</h3>

                  <h4 class="text-lg text-[#3d3b3b] font-bold mt-2">
                    <FontAwesomeIcon icon={faClock} /> 10 mins
                  </h4>
                </div>

                <div class="flex justify-center space-x-1 mt-4">
                  <Stars rating={rating} />
                </div>

                
              </div>
            </div>

            <div class="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              
              <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <div className="flex justify-end mt-2">
                  <FontAwesomeIcon
                    icon={isFavourite ? faHeartSolid  : faHeartRegular} 
                     
                    className={` ${isFavourite ? "text-red-500" : "text-grey" } cursor-pointer text-2xl`}
                    onClick={toggleFavourite}
                  />
                </div>
                <img
                  src={img1}
                  alt="product1"
                  class="h-full w-full object-contain"
                />
              </div>

              <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              
                <div class="text-center">
                  <h3 class="text-[20px] font-bold text-[#101010]">Momo</h3>

                  <h4 class="text-lg text-[#3d3b3b] font-bold mt-2">
                    <FontAwesomeIcon icon={faClock} /> 10 mins
                  </h4>
                </div>

                <div class="flex justify-center space-x-1 mt-4">
                  <Stars rating={rating} />
                </div>

                
              </div>
            </div>

            <div class="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              
              <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <div className="flex justify-end mt-2">
                  <FontAwesomeIcon
                    icon={isFavourite ? faHeartSolid  : faHeartRegular} 
                     
                    className={` ${isFavourite ? "text-red-500" : "text-grey" } cursor-pointer text-2xl`}
                    onClick={toggleFavourite}
                  />
                </div>
                <img
                  src={img1}
                  alt="product1"
                  class="h-full w-full object-contain"
                />
              </div>

              <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              
                <div class="text-center">
                  <h3 class="text-[20px] font-bold text-[#101010]">Momo</h3>

                  <h4 class="text-lg text-[#3d3b3b] font-bold mt-2">
                    <FontAwesomeIcon icon={faClock} /> 10 mins
                  </h4>
                </div>

                <div class="flex justify-center space-x-1 mt-4">
                  <Stars rating={rating} />
                </div>

                
              </div>
            </div>

            <div class="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              
              <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <div className="flex justify-end mt-2">
                  <FontAwesomeIcon
                    icon={isFavourite ? faHeartSolid  : faHeartRegular} 
                     
                    className={` ${isFavourite ? "text-red-500" : "text-grey" } cursor-pointer text-2xl`}
                    onClick={toggleFavourite}
                  />
                </div>
                <img
                  src={img1}
                  alt="product1"
                  class="h-full w-full object-contain"
                />
              </div>

              <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              
                <div class="text-center">
                  <h3 class="text-[20px] font-bold text-[#101010]">Momo</h3>

                  <h4 class="text-lg text-[#3d3b3b] font-bold mt-2">
                    <FontAwesomeIcon icon={faClock} /> 10 mins
                  </h4>
                </div>

                <div class="flex justify-center space-x-1 mt-4">
                  <Stars rating={rating} />
                </div>

                
              </div>
            </div>

            <div class="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              
              <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <div className="flex justify-end mt-2">
                  <FontAwesomeIcon
                    icon={isFavourite ? faHeartSolid  : faHeartRegular} 
                     
                    className={` ${isFavourite ? "text-red-500" : "text-grey" } cursor-pointer text-2xl`}
                    onClick={toggleFavourite}
                  />
                </div>
                <img
                  src={img1}
                  alt="product1"
                  class="h-full w-full object-contain"
                />
              </div>

              <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              
                <div class="text-center">
                  <h3 class="text-[20px] font-bold text-[#101010]">Momo</h3>

                  <h4 class="text-lg text-[#3d3b3b] font-bold mt-2">
                    <FontAwesomeIcon icon={faClock} /> 10 mins
                  </h4>
                </div>

                <div class="flex justify-center space-x-1 mt-4">
                  <Stars rating={rating} />
                </div>

                
              </div>
            </div>

            <div class="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              
              <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <div className="flex justify-end mt-2">
                  <FontAwesomeIcon
                    icon={isFavourite ? faHeartSolid  : faHeartRegular} 
                     
                    className={` ${isFavourite ? "text-red-500" : "text-grey" } cursor-pointer text-2xl`}
                    onClick={toggleFavourite}
                  />
                </div>
                <img
                  src={img1}
                  alt="product1"
                  class="h-full w-full object-contain"
                />
              </div>

              <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
              
                <div class="text-center">
                  <h3 class="text-[20px] font-bold text-[#101010]">Momo</h3>

                  <h4 class="text-lg text-[#3d3b3b] font-bold mt-2">
                    <FontAwesomeIcon icon={faClock} /> 10 mins
                  </h4>
                </div>

                <div class="flex justify-center space-x-1 mt-4">
                  <Stars rating={rating} />
                </div>

                
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};
