import { useState } from 'react';
import AllCountries from '../components/AllCountries';
import DropDown from '../components/DropDown';
import Search from '../components/Search';
const Home = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <main className="mx-auto  max-w-[1400px] p-5">
        <div className="flex flex-col gap-4 justify-between md:flex-row">
          <Search setSearch={setSearch} />
          <DropDown />
        </div>
        <AllCountries search={search} />
      </main>
    </>
  );
};

export default Home;
