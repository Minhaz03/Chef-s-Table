import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurReciepe from "./Components/Our_Reciepe/OurReciepe";
import Recipes from "./Components/Recipes.jsx/Recipes";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [recipeClick, setRecipeClick] = useState([]);

  const addRecipeOnClick = recipes => {
    const isExist = recipeClick.find(previousRecipe => previousRecipe.recipe_id === recipes.recipe_id)
    if (!isExist) {
      setRecipeClick([...recipeClick, recipes])
    }
    else{
      alert('Recipe already exists in the queue.')
    }
  }

  console.log(recipeClick)


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
           <Sidebar recipeClick={recipeClick}
           ></Sidebar>

        </section>

        
      </section>
    </>
  );
}

export default App;
