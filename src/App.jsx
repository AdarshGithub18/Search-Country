import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
