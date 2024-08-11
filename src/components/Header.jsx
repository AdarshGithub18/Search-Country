import React from 'react';
import { BsMoonFill } from 'react-icons/bs';
const Header = () => {
  return (
    <header>
      <nav className='className=" bg-white flex items-center shadow-md justify-between px-3 py-5'>
        <h2 className="text-gray-950 text-xl font-semibold">
          <i>Search Countries</i>
        </h2>
        <div className="darkMode flex items-center gap-3">
          <span className="text-xl">
            <BsMoonFill />
          </span>
          <p>Dark Mode</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
