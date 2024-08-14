import React from 'react';

import { Link } from 'react-router-dom';

const CountryCard = ({ name, flag, region, capital, population, data }) => {
  return (
    <>
      <Link
        state={data}
        to={`${name}`}
        className="card-container dark:bg-[#1d273e] rounded-md max-h-fit overflow-hidden pb-6 shadow-md hover:scale-105 ease-in duration-200"
      >
        <div className=" flag-container w-full md:h-40 ">
          <img src={flag} alt="" className="object-cover w-full h-full  " />
        </div>
        <div className="country-info flex flex-col mx-4 gap-4 mt-4 dark:text-white  ">
          <h3 className="text-2xl font-semibold ">{name}</h3>
          <p>
            <b>Capital : </b>
            {capital}
          </p>
          <p>
            <b>Region :</b>
            {region}
          </p>
          <p>
            <b>Population :{population} </b>
          </p>
        </div>
      </Link>
    </>
  );
};

export default CountryCard;
