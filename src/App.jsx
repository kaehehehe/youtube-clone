import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Video from './pages/Video';
import S_Video from './pages/S_Video';
import Search from './pages/Search';

const App = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/video/:id" element={<S_Video />} />
          <Route path="/video/:id" element={<Video />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
