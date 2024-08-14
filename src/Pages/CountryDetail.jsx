import React, { useContext, useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

import { useLocation, useParams } from 'react-router-dom';
import CountrydetailLoading from '../components/CountrydetailLoading';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';

const CountryDetail = () => {
  const { theme } = useContext(ThemeContext);
  const params = useParams();
  const { state } = useLocation();

  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);

  const [notFound, setNotFound] = useState(false);

  const API = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  const updateCountry = (data) => {
    setCountryData({
      name: data.name.common || data.name,
      nativeName: Object.values(data.name.nativeName || [])[0]?.common,
      flag: data.flags.svg,
      capital: data.capital || [],
      population: data.population.toLocaleString('en-In'),
      region: data.region,
      subRegion: data.subregion,
      currencies: Object.values(data.currencies || [])
        .map((currency) => currency.name)
        .join(', '),
      currencySymbol: Object.values(data.currencies || []).symbol,
      languages: Object.values(data.languages || []).join(', '),
      showMap: data.maps.googleMaps,
    });
  };

  const fetchData = async () => {
    try {
      const res = await fetch(API);
      const [data] = await res.json();
      updateCountry(data);
    } catch (error) {
      setNotFound(!notFound);
    }
  };

  useEffect(() => {
    if (state) {
      updateCountry(state);
      return;
    }
    fetchData();
  }, []);

  if (notFound) {
    return (
      <>
        <h1>Country Not Found</h1>
      </>
    );
  }

  return countryData === null ? (
    <CountrydetailLoading />
  ) : (
    <>
      <div
        className={` h-screen  ${theme === 'dark' ? 'dark:bg-[#12162a]' : ''} `}
      >
        <div className="p-5">
          <button
            className={`shadow-md  px-3 rounded-md py-2    flex items-center gap-1 ${
              theme === 'dark' ? 'dark:bg-[#1d273e]' : ''
            } dark:text-white`}
            onClick={() => history.back()}
          >
            <BsArrowLeft />
            back
          </button>
        </div>

        <div className="flex flex-col  px-2 max-w-[1200px] md:gap-24  mx-auto md:flex-row items-center md:mt-20">
          <div className="flag">
            <img
              className="rounded-md h-80"
              src={countryData.flag}
              alt={`${countryData.name.common} flag`}
            />
          </div>

          <div className="dark:text-white">
            <h1 className="text-3xl my-4 md:text-4xl font-bold">
              {countryData.name.toUpperCase() || countryData.name}
            </h1>

            <div className="country-details-text grid grid-cols-2 gap-4 md:gap-6 ">
              <p>
                <b>Native Name: </b>
                <span className="native-name ">{countryData.nativeName}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span>{countryData.capital}</span>
              </p>

              <p>
                <b>Popluation: </b>
                <span className="native-name">{countryData.population}</span>
              </p>

              <p>
                <b>Region: </b>
                <span className="region">{countryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="region">{countryData.subRegion}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{countryData.currencies}</span>
              </p>

              <p>
                <b>Currency Symbol: </b>
                <span className="currencies">{countryData.currencySymbol}</span>
              </p>

              <p>
                <b>Languages: </b>
                <span className="languages"> {countryData.languages}</span>
              </p>
              <a
                href={countryData.showMap}
                target="_blank"
                className="flex dark:text-white items-center gap-2"
              >
                {' '}
                <FaMapMarkedAlt
                  size={24}
                  className="text-gray-800 dark:text-white"
                />
                Show Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
