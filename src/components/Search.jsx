import React from 'react';

const Search = ({ setSearch }) => {
  return (
    <>
      <div className="mt-4">
        <input
          className="shadow-sm rounded-md w-[300px] md:w-[500px] px-4 py-3 outline-none border-none "
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
    </>
  );
};

export default Search;
