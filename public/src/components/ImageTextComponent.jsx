import React from 'react';
import './ImageTextComponent.css';

const ImageTextComponent = () => {
  return (
    <div className="image-text-container">
      <div className="image-section">
        <img
          src={'public/profPic.jpg.jpg'}
          alt="Static Display"
          className="display-image"
        />
      </div>
      <div className="text-section">
        <p>
          Hello, my name is Vivek Patel. I am currently a junior at Indiana University Bloomington majoring in Computer Science and minoring in Data Science, Informatics, and Math. I have a passion for technology and software development, ever since I was in high school after building my first computer. I am also an Undergraduate Teaching Assistant for CSCI-C 291: C and Unix, and a substitute teacher for Richmond Community Schools.
        </p>
      </div>
    </div>
  );
};

export default ImageTextComponent;
