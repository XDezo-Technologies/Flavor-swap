import React, { useState } from "react";
import axios from "axios"

export const RecipeSubmissionForm = () => {
  const [title, setTitle] = useState("");

  const [form, setForm] = useState({});
  const [file, setFile] = useState([])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('file', file)
    for(const key in form) {
      formData.append(key, form[key])
    }

    console.log(formData)

    const response = await axios.post(
      "http://localhost:3001/submitRecipe",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )

    console.log(response.data)

  };
  return (
    <div className="">
      <div className="max-w-lg mx-auto">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Post new Recipe
          </span>
        </h1>
        <form
          onSubmit={handleSubmit}
          method="POST"
          encType={'multipart/form-data'}
          className="bg-blue-300 shadow-md rounded px-4 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              name="title"
              placeholder="Recipe Title"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full h-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              placeholder="a short description"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cooking_time">
              Cooking Time (minutes)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cooking_time"
              type="number"
              name="cooking_time"
              placeholder="Cooking Time"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="difficulty">
              Difficulty Rating (1-5)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="difficulty"
              type="number"
              name="difficulty"
              min="1"
              max="5"
              placeholder="Difficulty Rating"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ingredients">
              Ingredients
            </label>
            <textarea
              className="shadow appearance-none border h-32 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ingredients"
              name="ingredients"
              placeholder="Enter Ingredients"
              onChange={handleChange}></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image">
              Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="recipe_image"
              onChange={(e)=>{setFile(e.target.files[0])}}
              type="file"
              name="files"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="method">
              Method
            </label>
            <textarea
              className="shadow appearance-none border h-32 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="method"
              name="method"
              placeholder="Enter Method"
              onChange={handleChange}></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
