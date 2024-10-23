import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurReciepe from "./Components/Our_Reciepe/OurReciepe";
import Recipes from "./Components/Recipes.jsx/Recipes";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [recipeClick, setRecipeClick] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const addRecipeOnClick = recipes => {
    const isExist = recipeClick.find(previousRecipe => previousRecipe.recipe_id === recipes.recipe_id)
    if (!isExist) {
      setRecipeClick([...recipeClick, recipes])
    }
    else{
      alert('Recipe already exists in the queue.')
    }
  }

  const handleRemove = id => {
    // find which recipe to remove
    const deletedRecipe = recipeClick.find(recipe => recipe.recipe_id === id);

    // remove from want to cook table
    const updatedQueue = recipeClick.filter(recipe => recipe.recipe_id !== id);
    setRecipeClick(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  }

  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  }


  return (
    <>
      <section className='max-w-screen-2xl mx-auto'>

        {/* header nav */}
        <Header></Header>

        {/* banner section */}
        <Banner></Banner>

        {/* recipe sections */}
        <OurReciepe></OurReciepe>

        {/* recipe card section */}
        <section className="flex flex-col md:flex-row gap-6 mb-24 mt-24">
           {/* card section */}
            <Recipes addRecipeOnClick={addRecipeOnClick}
            ></Recipes>

           {/* side bar */}
           <Sidebar handleRemove={handleRemove}
           recipeClick={recipeClick}
           preparedRecipe={preparedRecipe}
           calculateTimeAndCalories={calculateTimeAndCalories}
           totalTime={totalTime}
           totalCalories={totalCalories}
           ></Sidebar>

        </section>

        
      </section>
    </>
  );
}

export default App;
