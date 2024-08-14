import React, { useContext, useState } from 'react';
import { BsMoonFill } from 'react-icons/bs';
import { MdSunny } from 'react-icons/md';

import { ThemeContext } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 z-10 ">
      <nav className=" dark:bg-[#1d273e]  bg-white flex items-center shadow-md justify-between px-3 py-5">
        <Link
          to={'/'}
          className="text-gray-950 md:mx-20 dark:text-white text-2xl font-semibold"
        >
          Search Countries 🗺️
        </Link>
        <div className="darkMode md:mx-20 dark:text-white flex items-center gap-3 cursor-pointer ">
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
