// components/Hero.js
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    fetch('/data/siteData.json')
      .then((response) => response.json())
      .then((data) => setHeroData(data.hero))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!heroData) {
    return (
      <section className="p-8 text-center">
        <p className="text-gray-500">กำลังโหลดข้อมูล...</p>
      </section>
    );
  }

  return (
    <section className="bg-blue-600 text-white p-8 text-center">
      <h1 className="text-4xl font-bold">{heroData.title}</h1>
      <p className="text-xl mt-2">{heroData.subtitle}</p>
      <p className="mt-4">{heroData.description}</p>
      <a
        href={heroData.cta.link}
        className="mt-6 inline-block bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition"
      >
        {heroData.cta.text}
      </a>
    </section>
  );
};

export default Hero;