import PropTypes from "prop-types";

const Sidebar = ({recipeClick}) => {
    

    return (
        <div className="md:w-1/3">
            <h1>Want To Cook: {recipeClick.length}</h1>
        </div>
    );
};


Sidebar.propTypes = {
    recipeClick: PropTypes.array
}

export default Sidebar;