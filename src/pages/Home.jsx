import React from 'react';
import ImageTextComponent from '../components/ImageTextComponent';
import './Home.css';
import FooterBar from '../components/FooterBar';

const Home = () => {
  return (
    <div className="home-page">
      <div className="header-container">
        <h1>Home Page</h1>
      </div>
      <ImageTextComponent />
      <FooterBar />
    </div>
  );
};

export default Home;
