
const Header = () => {
  return (
    <div>
      <div className="md:flex text-center space-y-3 md:space-y-0 justify-between mt-10 ">
        <h2 className="md:text-3xl text-2xl">Chef's Table</h2>
        <div>
        <ul
          className="flex gap-2 md:gap-5 text-xl font-medium md:text-center ml-4 md:ml-0
            "
        >
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Search</li>
        </ul>
        </div>

        <div className="avatar gap-3">
          <input 
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="w-12 rounded-full">
            <img src="https://i.ibb.co.com/crgzFDm/9439678.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
