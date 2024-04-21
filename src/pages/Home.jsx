import React from 'react';

import PostMenu from '../components/PostMenu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <PostMenu />
      <Footer />
    </div>
  );
}
