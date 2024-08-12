import React, { useEffect, useState } from 'react';
import { BiArrowToLeft } from 'react-icons/bi';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const params = useParams();

  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);

  const [notFound, setNotFound] = useState(false);

  const API = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  const fetchData = async () => {
    try {
      const res = await fetch(API);
      const [data] = await res.json();

      console.log(data);
      setCountryData({
        name: data.name.common,
        nativeName: Object.values(data.name.nativeName)[0].common,
        flag: data.flags.svg,
        capital: data.capital,
        population: data.population.toLocaleString('en-In'),
        region: data.region,
        subRegion: data.subregion,
        currencies: Object.values(data.currencies)[0].name,
        currencySymbol: Object.values(data.currencies)[0].symbol,
        languages: Object.values(data.languages),
      });
    } catch (error) {
      setNotFound(!notFound);
    }
  };

  useEffect(() => {
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
    'loading....'
  ) : (
    <>
      <div className="mt-5">
        <button
          className="shadow-md px-3 rounded-md py-2 ml-4 flex items-center"
          onClick={() => history.back()}
        >
          <BiArrowToLeft />
          back
        </button>
      </div>
      <div className="flex flex-col px-2 max-w-[1200px] md:gap-20 mx-auto md:flex-row items-center md:mt-20">
        <div className="flag">
          <img
            className="rounded-md h-80"
            src={countryData.flag}
            alt={`${countryData.name.common} flag`}
          />
        </div>

        <div className="">
          <h1 className="text-3xl md:text-4xl  my-3 font-bold">
            {countryData.name.toUpperCase()}
          </h1>

          <div className="country-details-text grid grid-cols-2 gap-4 md:gap-6 ">
            <p>
              <b>Native Name: </b>
              <span className="native-name ">{countryData.nativeName}</span>
            </p>
            <p>
              <b>Capital: </b>
              <span>{countryData.capital.join(', ')}</span>
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
              <span className="languages">
                {' '}
                {countryData.languages.join(', ')}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
