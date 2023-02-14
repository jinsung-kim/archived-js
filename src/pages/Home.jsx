import React from "react";

import PostGrid from "../components/PostGrid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className='home-container'>
      <Navbar />
      <PostGrid />
      <Footer />
    </div>
  );
}
