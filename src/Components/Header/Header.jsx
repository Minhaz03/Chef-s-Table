const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center my-8 space-y-4">
      <h2 className="text-3xl font-bold text-gray-800">Chef's Table</h2>
      <div>
        <ul
          className="flex gap-2 md:gap-5 font-medium text-base text-gray-600
            "
        >
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Search</li>
        </ul>
      </div>

      <div className="flex flex-row justify-between items-center gap-4">
        {/* search bar */}
        <div className="flex justify-between items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="py-4 px-7 bg-gray-100 rounded-full placeholder-gray-800 outline-none"
          />
          <div className="absolute inset-y-0 -left-1 pl-4 flex items-center">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        {/* icon avatar */}
        
          <img className="w-12 rounded-full" src="https://i.ibb.co.com/crgzFDm/9439678.jpg" />
        
      </div>
    </div>
  );
};

export default Header;
