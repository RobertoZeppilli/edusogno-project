import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './index.css';

import Navbar from './components/navbar/Navbar';

// pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Services from './pages/services/Services';
import Reviews from './pages/reviews/Reviews';
import Faq from './pages/faq/Faq';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<About />} />
        <Route path="/servizi" element={<Services />} />
        <Route path="/recensioni" element={<Reviews />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
