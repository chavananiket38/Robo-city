import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div className="pa2 tc">
            <input className="pa3 ba b--green bg-lightest-blue ma2"
            type="search" placeholder="Search Robo"
            onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;