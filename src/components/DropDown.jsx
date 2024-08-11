import React from 'react';

const DropDown = () => {
  return (
    <>
      <div className="flex ">
        <select
          name=""
          id=""
          className="rounded-md shadow-sm px-5 py-3 bg-white md:px-4 md:py-1 outline-none border-none"
        >
          <option hidden="">Select a Country</option>
          <option value={'America'}>America</option>
          <option value={'Africa'}>Africa</option>
          <option value={'India'}>India</option>
          <option value={'Australia'}>Australia</option>
          <option value={'Japan'}>Japan</option>
          <option value={'China'}>China</option>
        </select>
      </div>
    </>
  );
};

export default DropDown;
