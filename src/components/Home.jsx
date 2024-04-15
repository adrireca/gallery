import React from 'react';
import { Box } from '@mui/material';
import CategoryCard from './CategoryCard';

const categories = [
  { title: 'Wild Nature', imageUrl: '/src/assets/img/categories/wild-nature.jpeg', classStyle: 'classStyle1'},
  { title: 'Historic Cities', imageUrl: '/src/assets/img/categories/historic-cities.jpg', classStyle: 'classStyle2' },
];

export const Home = () => {
  return (
    <Box>
      <Box className='div-categories'>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            imageUrl={category.imageUrl}
            classStyle={category.classStyle}
          />
        ))}
      </Box>
    </Box>
  );
};
