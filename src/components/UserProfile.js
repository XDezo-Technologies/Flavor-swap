import React from "react";
import img from "../assets/profile.jpg"

export const UserProfile = () => {
  return (
    <div class="flex items-center flex-col">
      <div class="max-w-screen-xl mx-auto px-4 py-8 ">
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <div class="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200">
            <img
              class="object-cover w-full h-full"
              src={img}
              alt="User Image"
            />
          </div>
          <div class="mt-6 md:mt-0 md:ml-8">
            <h2 class="text-xl font-semibold mb-4">Saved Recipes</h2>
            <ul>
              <li class="mb-2">
                <a href="#" class="text-blue-500 hover:underline">
                  Recipe 1
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-blue-500 hover:underline">
                  Recipe 2
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-blue-500 hover:underline">
                  Recipe 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
