import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurReciepe from "./Components/Our_Reciepe/OurReciepe";
import Recipes from "./Components/Recipes.jsx/Recipes";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
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
            <Recipes></Recipes>

           {/* side bar */}
           <Sidebar></Sidebar>

        </section>

        
      </section>
    </>
  );
}

export default App;
