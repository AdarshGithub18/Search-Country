import React from 'react';

const DropDown = ({ setSearch }) => {
  return (
    <>
      <div className="flex ">
        <select
          onClick={(e) => setSearch(e.target.value.toLowerCase())}
          className="rounded-md shadow-sm px-5 py-4 dark:bg-[#1d273e] dark:text-white bg-white  outline-none border-none"
        >
          <option value={''}>Search Countrt by Region</option>
          <option value={'Americas'}>Americas</option>
          <option value={'Africa'}>Africa</option>
          <option value={'Asia'}>Asia</option>
          <option value={'Europe'}>Europe</option>
          <option value={'Oceania'}>Oceania</option>
        </select>
      </div>
    </>
  );
};

export default DropDown;
