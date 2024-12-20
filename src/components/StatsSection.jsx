import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';



const StatCard = ({ number, description, delay }) => {
    const [count, setCount] = React.useState(0);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const finalNumber = parseInt(number);
  
    useEffect(() => {
      if (isInView) {
        controls.start('visible');
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = finalNumber / steps;
        let current = 0;
  
        const timer = setInterval(() => {
          current += increment;
          if (current >= finalNumber) {
            setCount(finalNumber);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
  
        return () => clearInterval(timer);
      }
    }, [isInView, finalNumber]);
  
    return (
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6, delay }}
        className="flex-1 flex flex-col justify-start items-center gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300 cursor-pointer group"
      >
        <div className="w-full text-center text-black text-4xl sm:text-5xl lg:text-6xl font-medium leading-[76.8px] font-['Gambetta'] group-hover:scale-110 transition-transform duration-300">
          {count}+
        </div>
        <div className="w-full text-center text-black text-lg sm:text-xl lg:text-2xl font-normal leading-[28.8px] group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </div>
      </motion.div>
    );
  };

  const StatsSection = () => {
    const stats = [
      { number: "700", description: "Registered Alumni globally" },
      { number: "5", description: "Years Active" },
      { number: "40", description: "Countries Represented" },
      { number: "70", description: "Impact Projects" }
    ];
  
    return (
      <section className="w-full py-12 px-4 sm:px-[10%] flex flex-col justify-start items-center gap-4 bg-white">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              number={stat.number}
              description={stat.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </section>
    );