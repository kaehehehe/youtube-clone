import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import PopularVideoDetails from './pages/VideoDetails/PopularVideoDetails';
import SearchedVideoDetails from './pages/VideoDetails/SearchedVideoDetails';
import Search from './pages/Search';
import SideNavbar from './components/SideNavbar';
import { SideNavbarPortals } from './components/SideNavbar/SideNavbarPortals';

const App = () => {
  const [showNavbar, setShowSideNavbar] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (showNavbar) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }, [showNavbar]);
  
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Header setShow={setShowSideNavbar} />
        {showNavbar && (
          <SideNavbarPortals>
            <SideNavbar setShow={setShowSideNavbar} />
          </SideNavbarPortals>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/video/:id" element={<SearchedVideoDetails />} />
          <Route path="/video/:id" element={<PopularVideoDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
