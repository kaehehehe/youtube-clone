import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import Search from './pages/Search/Search';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/video/:id" element={<Video />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
