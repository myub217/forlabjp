import React, { useEffect, useState } from 'react'; import Hero from '@/components/Hero'; import Services from '@/components/Services'; import Portfolio from '@/components/Portfolio'; import Testimonials from '@/components/Testimonials'; import Contact from '@/components/Contact'; import Footer from '@/components/Footer'; import LoadingScreen from '@/components/LoadingScreen'; import { useTheme } from '@/context/ThemeContext';

interface SiteData { hero: any; services: any[]; portfolio: any[]; testimonials: any[]; contact: any; github: string; deployUrl: string; }

const Page = () => { const [data, setData] = useState<SiteData | null>(null); const { theme } = useTheme();

useEffect(() => { fetch('/data/siteData.json') .then((res) => res.json()) .then((data) => setData(data)) .catch((err) => console.error('Error loading siteData.json:', err)); }, []);

if (!data) { return <LoadingScreen />; }

return ( <div className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}> <Hero data={data.hero} /> <Services items={data.services} /> <Portfolio items={data.portfolio} /> <Testimonials items={data.testimonials} /> <Contact data={data.contact} /> <Footer github={data.github} deployUrl={data.deployUrl} /> </div> ); };

export default Page;

