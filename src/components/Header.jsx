import React, { useState } from 'react';
import { BsMoonFill } from 'react-icons/bs';
import { MdSunny } from 'react-icons/md';
const Header = ({ theme, handleTheme }) => {
  return (
    <header className="sticky top-0 z-10">
      <nav className=" dark:bg-[#1d273e] bg-white flex items-center shadow-md justify-between px-3 py-5">
        <h2 className="text-gray-950 dark:text-white text-xl font-semibold">
          <i>Search Countries</i>
        </h2>
        <div className="darkMode dark:text-white flex items-center gap-3 cursor-pointer ">
          <span className="text-xl" onClick={handleTheme}>
            {theme === 'light' ? <BsMoonFill /> : <MdSunny />}
          </span>
          <p>{theme === 'light' ? 'Dark' : 'Light'} Mode</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
