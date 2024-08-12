import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CountryCard = ({ name, flag, region, capital, population, showMap }) => {
  return (
    <>
      <Link
        to={`${name}`}
        className="card-container rounded-md max-h-fit overflow-hidden pb-6 shadow-md hover:scale-105 ease-in duration-200"
      >
        <div className=" flag-container w-full md:h-40 ">
          <img src={flag} alt="" className="object-cover w-full h-full  " />
        </div>

        <div className="country-info flex flex-col mx-4 gap-4 mt-4  ">
          <h3 className="text-2xl font-semibold">{name}</h3>
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
          <a href={showMap} target="_blank" className="flex items-center gap-2">
            {' '}
            <FaMapMarkedAlt size={24} className="text-gray-800" />
            Show Map
          </a>
        </div>
      </Link>
    </>
  );
};

export default CountryCard;
