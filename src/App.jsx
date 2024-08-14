import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  function handleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <main className={`dark:bg-[#12162a] `}>
        <Header theme={theme} handleTheme={handleTheme} />
        <Outlet />
      </main>
    </>
  );
}

export default App;
