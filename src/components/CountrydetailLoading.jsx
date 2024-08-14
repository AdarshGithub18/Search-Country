import React from 'react';
import '../components/CountryDetailLoading.css';

const CountrydetailLoading = () => {
  return (
    <div className="flex flex-col px-2 max-w-[1200px] md:gap-24 mx-auto md:flex-row items-center mt-10 md:mt-36">
      <div className="flag shimmer rounded-md h-80 w-full md:w-[50%] bg-gray-300"></div>

      <div className="w-full mt-5 md:mt-0 md:w-1/2">
        <h1 className="text-3xl md:text-4xl my-3 font-bold shimmer h-10 bg-gray-300 rounded-md"></h1>

        <div className="country-details-text grid grid-cols-2 gap-4 md:gap-6">
          {Array.from({ length: 8 }).map((_) => {
            return <p className="shimmer h-6 bg-gray-300 rounded-md"></p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CountrydetailLoading;
