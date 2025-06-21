// src/components/Hero.jsx
import { useState } from 'react';
import furniture from '../assets/furniture.jpg';
import sofa1 from '../assets/sofa1.jpg';
import sofa2 from '../assets/sofa2.jpg';
import sofa3 from '../assets/sofa3.jpg';
import table1 from '../assets/table1.jpg';
import table2 from '../assets/table2.jpg';
import table3 from '../assets/table3.jpg';
import chair1 from '../assets/chair1.jpg';
import chair2 from '../assets/chair2.jpg';
import chair3 from '../assets/chair3.jpg';
import bed1 from '../assets/bed1.jpg';
import bed2 from '../assets/bed2.jpg';
import bed3 from '../assets/bed3.jpg';
import lightning1 from '../assets/lightning1.jpg';
import lightning2 from '../assets/lightning2.jpg';
import lightning3 from '../assets/lightning3.jpg';
import decore1 from '../assets/decore1.jpg';
import decore2 from '../assets/decore2.jpg';
import decore3 from '../assets/decore3.jpg';

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(furniture);
  const [activeCategory, setActiveCategory] = useState('Sofa');

  // Define images for each category
  const categoryImages = {
    Sofa: [sofa1, sofa2, sofa3],
    Table: [table1, table2, table3],
    Chair: [chair1, chair2, chair3],
    Bed: [bed1, bed2, bed3],
    Lightning: [lightning1, lightning2, lightning3],
    Decore: [decore1, decore2, decore3],
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleProductClick = (image) => {
    setBackgroundImage(image);
  };

  return (
    <>
      <section className="relative h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <img
          src={backgroundImage}
          alt="Furniture Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white bg-opacity-80 p-8 rounded-lg max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              70% SALE OFF
            </h1>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              FURNITURE AT COST
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Discover premium furniture at unbeatable prices. Transform your home with our exclusive collection today!
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Title and Description */}
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
            POPULAR PRODUCTS
          </h2>
          <p className="text-gray-600 mb-8">
            Suspendisse vulputate enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>

          {/* Category Tabs */}
          <div className="flex justify-center space-x-4 mb-8">
            {Object.keys(categoryImages).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 text-gray-700 hover:text-blue-600 ${
                  activeCategory === category ? 'border-b-2 border-orange-500 text-orange-500' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categoryImages[activeCategory].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${activeCategory} ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => handleProductClick(image)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;