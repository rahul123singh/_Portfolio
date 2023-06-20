import React from 'react';
import "./HeroImg2Styles.css";

const HeroImg2 = (props) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <div className="text-container">
          <p className="text1">{props.text1}</p>
          <p className="text2">{props.text2}</p>
        </div>
        <h1>{props.heading}</h1>
      </div>
    </div>
  );
};

export default HeroImg2;
