import { useEffect, useState } from "react";
// import { list } from "postcss";
import PropTypes from "prop-types";

const Recipes = ({ addRecipeOnClick }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recipes.map((recipes) => (
          <div key={recipes.recipe_id} className="card bg-base-100 border-2">
            {/* image of recipe */}
            <figure className="px-8 pt-6">
              <img
                className="md:h-[400px] w-full rounded-3xl"
                src={recipes.recipe_image}
                alt="recipe image"
              />
            </figure>
            <div className="card-body">
              {/* name */}
              <h2 className="card-title text-2xl text-gray-800 font-medium">
                {recipes.recipe_name}
              </h2>
              {/* description */}
              <p className="text-gray-600 text-base">
                {recipes.short_description}
              </p>
              <hr />
              {/* ingredients */}
              <h3 className="card-title text-xl text-gray-800 font-medium">
                Ingredients: {recipes.ingredients.length}
              </h3>
              <ul className="ml-10">
                {recipes.ingredients.map((item, idx) => (
                  <li 
                  className="list-disc text-gray-600" 
                  key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <i className="fa-regular fa-clock text-2xl"></i>
                  {recipes.preparing_time} Minutes
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-fire text-2xl"></i>
                  {recipes.calories} Calories
                </div>
              </div>
              <div className="card-actions">
                <button onClick={() => addRecipeOnClick(recipes)}
                className="text-lg font-medium btn rounded-full w-[170px]
                h-[50px] text-black bg-[#0BE58A]">
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Recipes.propTypes = {
    addRecipeOnClick: PropTypes.func
}

export default Recipes;
