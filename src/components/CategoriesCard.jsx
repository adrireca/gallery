import { Box, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from 'react-router-dom';

/* https://picsum.photos/600/900 */

const categories = [
    { title: 'Wild Nature', imageUrl: 'https://picsum.photos/600/900' },
    { title: 'Historic Cities', imageUrl: 'https://picsum.photos/900/600' },
    { title: 'Extreme Adventures', imageUrl: 'https://picsum.photos/900/700' },
    { title: 'Modern Architecture', imageUrl: 'https://picsum.photos/900/700' },
    { title: 'Flora and Fauna', imageUrl: 'https://picsum.photos/900/600' },
    { title: 'World Cultures', imageUrl: 'https://picsum.photos/1000/1400' },
    { title: 'Coastal Landscapes', imageUrl: 'https://picsum.photos/800/1200' },
    { title: 'Urban Art', imageUrl: 'https://picsum.photos/800/1000' },
    { title: 'International Cuisine', imageUrl: 'https://picsum.photos/800/1000' },
    { title: 'Everyday Moments', imageUrl: 'https://picsum.photos/750/1000' },
    { title: 'Underwater Wonders', imageUrl: 'https://picsum.photos/800/900' },
    { title: 'Rock Art', imageUrl: 'https://picsum.photos/800/1100' },
];



export const CategoriesCard = () => {
    // const [isHovered, setIsHovered] = useState(false);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{
                350: 1, 500: 2, 750: 3, 900: 4
            }}
        >
            <Masonry
                columnsCount={4}
            >
                {categories.map((category, i) => (
                    <Link
                        to="/single"
                        className={`card-category ${hoveredIndex === i ? 'hovered' : ''}`}
                        // onMouseEnter={() => setIsHovered(true)}
                        // onMouseLeave={() => setIsHovered(false)}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='gradient-layer'></div>
                        <CardMedia
                            key={i}
                            alt={category.title}
                            component="img"
                            image={category.imageUrl}
                            className='card-category-image'
                            // src={category.imageUrl}
                            style={{ width: "100%", display: "block" }}
                        />
                        <Box p={2} className="text-overlay-category">
                            <Typography className='title-category' variant="h6">{category.title}</Typography>
                            <Typography className='description-category' variant="body2">72 photos</Typography>
                        </Box>
                    </Link>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}
