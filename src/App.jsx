import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurReciepe from "./Components/Our_Reciepe/OurReciepe";

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
        
      </section>
    </>
  );
}

export default App;
