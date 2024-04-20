import React from 'react';
import { Box } from '@mui/material';
import { CategoriesCard } from './CategoriesCard';

export const Home = () => {

  return (
    <Box>
      <Box className='div-categories'>
        <CategoriesCard />
      </Box>
    </Box>
  );
};
