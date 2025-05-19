// components/ServiceCarousel.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceCarouselProps {
  serviceType: string;
}

export const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ serviceType }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const carouselData = {
    'bush-safaris': [
      { 
        id: 1, 
        image: 'https://images.pexels.com/photos/4577497/pexels-photo-4577497.jpeg?auto=compress&cs=tinysrgb&w=600', 
        title: 'Maasai Mara Safari', 
        description: "Witness the great migration in Kenya's premier wildlife reserve"
      },
      { 
        id: 2, 
        image: 'https://images.pexels.com/photos/7001092/pexels-photo-7001092.jpeg?auto=compress&cs=tinysrgb&w=600', 
        title: 'Serengeti Adventure', 
        description: "Explore Tanzania's endless plains teeming with wildlife"
      },
      { 
        id: 3, 
        image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600', 
        title: 'Kruger National Park', 
        description: "South Africa's iconic safari destination"
      }
    ],
    'air-safaris': [
      { 
        id: 1, 
        image: 'https://images.pexels.com/photos/8022322/pexels-photo-8022322.jpeg?auto=compress&cs=tinysrgb&w=600', 
        title: 'Okavango Delta Fly-in', 
        description: "Bird's eye view of Botswana's magnificent delta"
      },
      { 
        id: 2, 
        image: 'https://images.pexels.com/photos/29772131/pexels-photo-29772131/free-photo-of-colorful-hot-air-balloons-over-kanab-cliffs.jpeg?auto=compress&cs=tinysrgb&w=600', 
        title: 'Namib Desert Flight', 
        description: "Soar over the world's oldest desert and its stunning dunes"
      }
    ],
    'sports-golf': [
      { 
        id: 1, 
        image: 'https://images.pexels.com/photos/10028414/pexels-photo-10028414.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 
        title: 'Cape Town Golf Tour', 
        description: "Play on South Africa's premier coastal courses"
      },
      { 
        id: 2, 
        image: 'https://images.pexels.com/photos/6360039/pexels-photo-6360039.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 
        title: 'Kenya Highland Golf', 
        description: "Golf with views of Mount Kenya and wildlife"
      }
    ],
    'beach-excursions': [
      { 
        id: 1, 
        image: 'https://images.pexels.com/photos/31943678/pexels-photo-31943678/free-photo-of-serene-mediterranean-beach-with-umbrellas.jpeg?auto=compress&cs=tinysrgb&w=600', 
        title: 'Zanzibar Beach Holiday', 
        description: "Pristine white sand beaches and crystal clear waters"
      },
      { 
        id: 2, 
        image: 'https://images.pexels.com/photos/6821435/pexels-photo-6821435.jpeg?auto=compress&cs=tinysrgb&w=600', 
        title: 'Mozambique Island Hopping', 
        description: "Explore the Bazaruto Archipelago's hidden gems"
      }
    ],
    'cultural-safaris': [
      { 
        id: 1, 
        image: 'https://images.pexels.com/photos/29915019/pexels-photo-29915019/free-photo-of-traditional-african-ceremony-in-rural-landscape.jpeg?auto=compress&cs=tinysrgb&w=600', 
        title: 'Maasai Village Experience', 
        description: "Immerse yourself in the traditions of Kenya's iconic tribe"
      },
      { 
        id: 2, 
        image: 'https://images.pexels.com/photos/28135540/pexels-photo-28135540/free-photo-of-a-group-of-people-dressed-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 
        title: 'San Bushmen Cultural Tour', 
        description: 'Learn ancient survival skills in the Kalahari'
      }
    ],
    'Travel-Packages': [
      { 
        id: 2, 
        image: 'https://images.pexels.com/photos/3889891/pexels-photo-3889891.jpeg?auto=compress&cs=tinysrgb&w=600', 
        title: 'Kalahari Desert Indigenous Experience', 
        description: 'Discover the wisdom and traditional knowledge of San people in their native environment'
      }
    ]
  };

  useEffect(() => {
    setActiveSlide(0);
    
    const interval = setInterval(() => {
      setActiveSlide(prev => 
        (prev + 1) % carouselData[serviceType as keyof typeof carouselData].length
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [serviceType]);

  const slides = carouselData[serviceType as keyof typeof carouselData];

  // Animation variants for the carousel container
  const carouselVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={serviceType}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={carouselVariants}
        transition={{ duration: 0.5 }}
        className="relative h-80 overflow-hidden rounded-lg"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                filter: "brightness(0.7)"
              }}
            />
            <motion.div 
              className="absolute inset-0 flex flex-col justify-end p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index === activeSlide ? 1 : 0, y: index === activeSlide ? 0 : 20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
              <p className="text-lg">{slide.description}</p>
            </motion.div>
          </div>
        ))}
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};