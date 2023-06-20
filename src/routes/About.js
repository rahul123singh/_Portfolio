import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const ButtonBox = ({ text }) => {
  return <button className="button-box">{text}</button>;
};

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="WORK EXPERIENCE"
        text1="Skills"
        text2={
          <>
            <ButtonBox text="React.js" />
            <ButtonBox text="HTML" />
            <ButtonBox text="CSS" />
            <ButtonBox text="MongoDB" />
            <ButtonBox text="Rest API" />
            <ButtonBox text="C++" />
            <ButtonBox text="C" />
          </>
        }
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
