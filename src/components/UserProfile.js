import img from "../assets/profile.jpg";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  faClock,
  faHeart as faHeartSolid,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { Stars } from "../components/Stars";

export const UserProfile = () => {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchFavorites = async () => {
      const userId = localStorage.getItem("user");
      const response = await axios.get(
        `http://localhost:3001/getUserFavorites?userId=${userId}`
      );
      setRecipes(response.data);

      const userResponse = await axios.get(
        `http://localhost:3001/getUser?userId=${userId}`
      )
      setUser(userResponse.data)
    };

    fetchFavorites();
  }, []);

  return (
    <div className="flex items-center flex-col">
      <div className="max-w-screen-xl mx-auto px-4 py-8 ">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200">
            <img
              className="object-cover w-full h-full"
              src={img}
              alt="User Image"
            />
          </div>
          <div className="mt-6 md:mt-0 md:ml-8">
            <h2 className="text-2xl font-semibold mb-4">{user.username}</h2>
            <ul>
              <li className="mb-2">
                <p className="text-blue-500 ">
                <span className="text-black">E-mail :</span>{user.email}
                </p>
              </li>
              <li className="mb-2">
                <p className="text-blue-500 ">
                  <span className="text-black">Bio :</span> Passionate home chef
                </p>
              </li>
              <li className="mb-2">
                <p className="text-blue-500 ">
                <span className="text-black">Recipes :</span> 3
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-4 mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Saved Recipes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-10">
          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <div className="flex justify-end mt-2">
                  <FontAwesomeIcon
                    icon={faHeartSolid}
                    className="text-red-500 cursor-pointer text-2xl"
                  />
                </div>
                <Link to={`/recipe/${recipe.title}`} state={recipe}>
                  <img
                    src={`http://localhost:3000/uploads/${recipe.image}`}
                    alt="recipe"
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
                  {/* Assuming Stars is a component that displays rating */}
                  <Stars rating={recipe.userRating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
