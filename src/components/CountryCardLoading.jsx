import React from 'react';
import { ShimmerPostItem } from 'react-shimmer-effects';

const CountryCardLoading = () => {
  return (
    <>
      <div className="mt-10 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9">
        {Array.from({ length: 20 }).map((_, idx) => {
          return (
            <ShimmerPostItem
              key={idx}
              card
              title
              text
              cta
              imageType={'thumbnail'}
            />
          );
        })}
      </div>
    </>
  );
};

export default CountryCardLoading;
