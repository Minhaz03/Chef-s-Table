import PropTypes from "prop-types";

const Sidebar = ({ recipeClick }) => {
  return (
    <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
      <h1 className="text-center font-semibold text-2xl text-gray-800 mx-auto border-b-2 mt-3 pb-3">Want To Cook: {recipeClick.length}</h1>

      {/* want to cook table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeClick.map((recipe, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td><button
                className="font-medium rounded-full
                 px-2 md:px-4 my-2 py-1
                 text-black bg-[#0BE58A]">
                  Preparing 
                </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* currently cooking table */}
    </div>
  );
};

Sidebar.propTypes = {
  recipeClick: PropTypes.array,
};

export default Sidebar;
