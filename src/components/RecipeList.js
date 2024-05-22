import React, { useEffect, useState } from "react";
import { Stars } from "../components/Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../assets/slider1.jpg";
import axios from "axios";
import {
  faClock,
  faHeart as faHeartRegular,
  faHeart as faHeartSolid,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export const RecipeList = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  useEffect( () => {
    axios
    .get("http://localhost:3001/getRecipes")
    .then((response) => setRecipes(response.data))

  }, []);

  const fetchRecipe = () => {
    console.log("Searching")
  }

  return (
    <div>
      <div className="font-sans">
        <div className="mt-4 bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
          <input
            type="email"
            placeholder="Search Something..."
            className="w-full outline-none bg-white pl-4 text-sm"
          />
          <button
            type="button"
            onClick={fetchRecipe}
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5">
            Search
          </button>
        </div>
        <div className="py-4 mx-auto lg:max-w-6xl md:max-w-4xl">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
            Top Recipes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-10">
            {recipes.map((recipe) => (
              <div
                key={recipe._id}
                className="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                
                
                <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                  <div className="flex justify-end mt-2">
                    <FontAwesomeIcon
                      icon={isFavourite ? faHeartSolid : faHeartRegular}
                      className={` ${
                        isFavourite ? "text-red-500" : "text-grey"
                      } cursor-pointer text-2xl`}
                      onClick={toggleFavourite}
                    />
                  </div>
                  <Link to={`/recipe/${recipe.title}`} state={recipe} >
                  <img
                    src={`http://localhost:3000/uploads/`+recipe.image}
                    alt="product1"
                    className="h-full w-full object-contain"
                  />
                  </Link>
                </div>

                <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-[20px] font-bold text-[#101010]">
                      {recipe.title}
                    </h3>

                    <h4 className="text-lg text-[#3d3b3b] font-bold mt-2">
                      <FontAwesomeIcon icon={faClock} /> {recipe.time} mins
                    </h4>
                  </div>

                  <div className="flex justify-center space-x-1 mt-4">
                    <Stars rating={recipe.userRating} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
