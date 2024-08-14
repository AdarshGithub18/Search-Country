import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import CountryCardLoading from '../components/CountryCardLoading';

const AllCountries = ({ search }) => {
  const [countriesData, setCountriesData] = useState([]);

  const APi = 'https://restcountries.com/v3.1/all';

  const fetchData = async () => {
    try {
      const res = await fetch(APi);
      const data = await res.json();
      setCountriesData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!countriesData.length ? (
        <CountryCardLoading />
      ) : (
        <div className="mt-10 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9">
          {countriesData
            .filter((country, idx) => {
              return (
                country.name.common.toLocaleLowerCase().includes(search) ||
                country.region.toLocaleLowerCase().includes(search)
              );
            })
            .map((country, idx) => {
              return (
                <CountryCard
                  key={idx}
                  name={country.name.common}
                  flag={country.flags.svg}
                  region={country.region}
                  capital={country.capital}
                  population={country.population.toLocaleString('en-In')}
                  showMap={country.maps.googleMaps}
                  data={country}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default AllCountries;
