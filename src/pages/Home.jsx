import React from 'react';
import Article from '../components/Article';
import Hero from '../components/Hero';
import Section from '../components/Section';

const Home = () => {
  return (
    <div className='w-full h-[100%]'>
      <Hero />
      <Section />
      <Article />
    </div>
  );
}

export default Home;