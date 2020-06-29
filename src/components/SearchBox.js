import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="search robots"
        className="pa3 ba b--green bg-lightest-blue mb3"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
