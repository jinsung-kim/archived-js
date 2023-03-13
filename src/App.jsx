import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Pages to import
// Source: https://reactrouter.com/docs/en/v6/upgrading/v5
import Home from './pages/Home';
import About from './pages/About';
import PostPage from './pages/PostPage';
import Capsules from './pages/Capsules';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/capsules" element={<Capsules />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
