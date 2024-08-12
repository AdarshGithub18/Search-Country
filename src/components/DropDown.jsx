import React from 'react';

const DropDown = () => {
  return (
    <>
      <div className="flex ">
        <select
          name=""
          id=""
          className="rounded-md shadow-sm px-5  bg-white  outline-none border-none"
        >
          <option hidden="">Search Countrt by Region</option>
          <option value={'America'}>America</option>
          <option value={'Africa'}>Africa</option>
          <option value={'Asia'}>Asia</option>
          <option value={'Australia'}>Australia</option>
          <option value={'Antarctica'}>Antarctica</option>
          <option value={'Europe'}>Europe</option>
        </select>
      </div>
    </>
  );
};

export default DropDown;
