import React from 'react';
import { Box } from '@mui/material';
import CategoryCard from './CategoryCard';
import { CategoriesCard } from './CategoriesCard';

const categories = [
  { title: 'Wild Nature', imageUrl: '/src/assets/img/categories/wild-nature.jpeg', classStyle: 'classStyle1'},
  { title: 'Historic Cities', imageUrl: '/src/assets/img/categories/historic-cities.jpg', classStyle: 'classStyle2' },
  { title: 'Extreme Adventures', imageUrl: '/src/assets/img/categories/extreme-adventures.jpg', classStyle: 'classStyle3' },
  { title: 'Modern Architecture', imageUrl: '/src/assets/img/categories/modern-architecture.jpg', classStyle: 'classStyle3' },
  // { title: 'World Cultures', imageUrl: '/src/assets/img/categories/world-cultures.jpg', classStyle: 'classStyle5' },
  // { title: 'Coastal Landscapes', imageUrl: '/src/assets/img/categories/coastal-landscapes.jpg', classStyle: 'classStyle6' },
  // { title: '7', imageUrl: '/src/assets/img/categories/coastal-landscapes.jpg', classStyle: 'classStyle7' },
  // { title: '8', imageUrl: '/src/assets/img/categories/coastal-landscapes.jpg', classStyle: 'classStyle8' },
  // { title: '9', imageUrl: '/src/assets/img/categories/coastal-landscapes.jpg', classStyle: 'classStyle9' },
  // { title: '10', imageUrl: '/src/assets/img/categories/coastal-landscapes.jpg', classStyle: 'classStyle10' },
  // { title: '11', imageUrl: '/src/assets/img/categories/coastal-landscapes.jpg', classStyle: 'classStyle11' },
  // { title: '12', imageUrl: '/src/assets/img/categories/coastal-landscapes.jpg', classStyle: 'classStyle12' },
  // { title: '13', imageUrl: '/src/assets/img/categories/coastal-landscapes.jpg', classStyle: 'classStyle13' },
  // { title: '14', imageUrl: '/src/assets/img/categories/coastal-landscapes.jpg', classStyle: 'classStyle14' },
  // { title: '15', imageUrl: '/src/assets/img/categories/coastal-landscapes.jpg', classStyle: 'classStyle15' },
];

export const Home = () => {
  return (
    <Box>
      <Box className='div-categories'>
        {/* {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            imageUrl={category.imageUrl}
            classStyle={category.classStyle}
          />
        ))} */}
        <CategoriesCard />
      </Box>
    </Box>
  );
};
