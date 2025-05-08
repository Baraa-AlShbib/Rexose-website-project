import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import CtaBanner from '../components/home/CtaBanner';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Rexose Agency | The business is digital</title>
        <meta name="description" content="Rexose Agency specializes in software development, branding, and digital marketing. Transform your business with our digital expertise." />
      </Helmet>
      
      <Hero />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <CtaBanner />
    </>
  );
}