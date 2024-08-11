import React from 'react';
import CountryCard from './CountryCard';
import countriesData from '../data/countriesData';

const AllCountries = ({ search }) => {
  return (
    <>
      <div className="mt-10 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9">
        {countriesData
          .filter((country, idx) => {
            return country.name.common.toLowerCase().includes(search);
          })
          .map((country, idx) => {
            return (
              <CountryCard
                name={country.name.common}
                flag={country.flags.svg}
                region={country.region}
                capital={country.capital}
                population={country.population.toLocaleString()}
              />
            );
          })}
      </div>
    </>
  );
};

export default AllCountries;
