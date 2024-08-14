import { useContext, useState } from 'react';
import AllCountries from '../components/AllCountries';
import DropDown from '../components/DropDown';
import Search from '../components/Search';
import { ThemeContext } from '../contexts/ThemeContext';
const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [search, setSearch] = useState('');
  return (
    <>
      <main className={`${theme === 'dark' ? 'dark:bg-[#12162a]' : ''}`}>
        <div className="mx-auto max-w-[1400px] p-5 min-h-[100vh]">
          <div className="flex flex-col gap-4 justify-between md:flex-row">
            <Search setSearch={setSearch} />
            <DropDown setSearch={setSearch} />
          </div>
          <AllCountries search={search} />
        </div>
      </main>
    </>
  );
};

export default Home;
