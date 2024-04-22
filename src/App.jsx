import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Source: https://reactrouter.com/docs/en/v6/upgrading/v5
import About from './pages/About';
import Capsules from './pages/Capsules';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import Thoughts from './pages/Thoughts';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/capsules" element={<Capsules />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
