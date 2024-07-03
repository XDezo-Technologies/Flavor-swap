import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartRegular, faHeart as faHeartSolid } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";
import { Stars } from "./Stars";

export const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState("");
  const [notfound, setNotfound] = useState(false);
  const [loading, setLoading] = useState(false);

  const userId = localStorage.getItem("user");

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/getUserFavorites?userId=${userId}`);
      return response.data.map(fav => fav._id);
    } catch (err) {
      console.error("Error fetching favorites:", err);
      return [];
    }
  };

  const isFavourite = (recipeId) => {
    return favorites.includes(recipeId);
  };

  const toggleFavourite = async (recipeId) => {
    try {
      const isFav = isFavourite(recipeId);
      const url = isFav ? 'http://localhost:3001/removeFav' : 'http://localhost:3001/addFav';
      await axios.post(url, { userId, recipeId });

      // Update favorites state
      if (isFav) {
        setFavorites(prevFavorites => prevFavorites.filter(fav => fav !== recipeId));
      } else {
        setFavorites(prevFavorites => [...prevFavorites, recipeId]);
      }
    } catch (err) {
      console.error("Error toggling favorite:", err);
    }
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const recipesResponse = await axios.get("http://localhost:3001/getRecipes");
        const userFavorites = await fetchFavorites();

        const updatedRecipes = recipesResponse.data.map(recipe => ({
          ...recipe,
          isFavorite: userFavorites.includes(recipe._id)
        }));

        setRecipes(updatedRecipes);
        setFavorites(userFavorites);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [userId]);

  const searchRecipe = async () => {
    try {
      const response = await axios.get("http://localhost:3001/searchRecipes", { params: { query } });
      if (response.status === 200) {
        setRecipes(response.data);
        setNotfound(false);
      } else {
        setRecipes([]);
        setNotfound(true);
      }
    } catch (err) {
      console.error("Error while searching for recipe:", err);
    }
  };

  return (
    <div>
      <div className="font-sans">
        <div className="mt-4 bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a recipe..."
            className="w-full outline-none bg-white pl-4 text-sm"
          />
          <button
            type="button"
            onClick={searchRecipe}
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
          >
            Search
          </button>
        </div>
        <div className="py-4 mx-auto lg:max-w-6xl md:max-w-4xl">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">Top Recipes</h2>
          {loading && <Loading />}
          {notfound && (
            <div className="text-center font-bold text-2xl">No Recipes Found</div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-10">
            {recipes.map((recipe) => (
              <div
                key={recipe._id}
                className="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all"
              >
                <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                  <div className="flex justify-end mt-2">
                    <FontAwesomeIcon
                      icon={isFavourite(recipe._id) ? faHeartSolid : faHeartRegular}
                      className={` ${isFavourite(recipe._id) ? "text-red-500" : "text-grey"} cursor-pointer text-2xl`}
                      onClick={() => toggleFavourite(recipe._id)}
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
                    <h3 className="text-[20px] font-bold text-[#101010]">{recipe.title}</h3>
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
    </div>
  );
};
