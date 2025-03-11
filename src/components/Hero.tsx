
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BookingButton from './BookingButton';
import HeroContent from './hero/HeroContent';
import HeroCardDisplay from './hero/HeroCardDisplay';
import ServicesList from './hero/ServicesList';
import { servicesData } from './hero/servicesData';

const Hero = () => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen mt-2 pt-20 md:pt-32 pb-16 px-4 md:px-6 hero-pattern flex items-center relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-light"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-light" style={{
      animationDelay: '1s'
      }}></div>
      <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-secondary/20 rounded-full blur-2xl animate-pulse-light" style={{
      animationDelay: '2s'
      }}></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <HeroContent />
        
        <motion.div 
          initial={{
            opacity: 0,
            scale: 0.9
          }} 
          animate={{
            opacity: 1,
            scale: 1
          }} 
          transition={{
            duration: 0.7,
            delay: 0.2
          }} 
          className="order-2 lg:order-2 flex flex-col justify-center items-center"
        >
          <HeroCardDisplay activeCard={activeCard} />
          <ServicesList 
            services={servicesData} 
            activeCard={activeCard} 
            setActiveCard={setActiveCard} 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
