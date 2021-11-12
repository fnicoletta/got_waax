import React from 'react';
import Nav from '../components/Nav';
import ImgHeader from '../components/ImgHeader';

const About: React.FC = () => {
  return (
    <div>
      <Nav />
      <ImgHeader overlay="About" imgUrl="/static/orange_car.jpg" />
    </div>
  );
};

export default About;
