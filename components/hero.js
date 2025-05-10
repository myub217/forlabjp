// Hero.js
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    // โหลดข้อมูลจาก JSON
    fetch('/data/siteData.json')
      .then((response) => response.json())
      .then((data) => setHeroData(data.hero))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!heroData) return <div>กำลังโหลดข้อมูล...</div>;

  return (
    <section className="bg-blue-500 text-white p-8">
      <h1 className="text-3xl font-bold">{heroData.title}</h1>
      <h2 className="text-xl">{heroData.subtitle}</h2>
      <p className="mt-4">{heroData.description}</p>
      <a
        href={heroData.cta.link}
        className="mt-4 inline-block bg-white text-blue-500 p-2 rounded"
      >
        {heroData.cta.text}
      </a>
    </section>
  );
};

export default Hero;