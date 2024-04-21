import { Box, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


/* https://picsum.photos/600/900 */

const categories = [
    { title: 'Wild Nature', imageUrl: '/src/assets/img/categories/wild-nature.jpeg', numberPhotos: 20, href: '/wild-nature' },
    { title: 'Historic Cities', imageUrl: '/src/assets/img/categories/historic-cities.jpg', numberPhotos: 20, href: '/historic-cities' },
    { title: 'Extreme Adventures', imageUrl: '/src/assets/img/categories/extreme-adventures.jpg', numberPhotos: 20, href: '/extreme-adventures' },
    { title: 'Modern Architecture', imageUrl: '/src/assets/img/categories/modern-architecture.jpg', numberPhotos: 20, href: '/modern-architecture' },
    { title: 'Flora and Fauna', imageUrl: '/src/assets/img/categories/flora-and-fauna.jpg', numberPhotos: 20, href: '/flora-and-fauna' },
    { title: 'World Cultures', imageUrl: '/src/assets/img/categories/world-cultures.jpg', numberPhotos: 20, href: '/world-cultures' },
    { title: 'Coastal Landscapes', imageUrl: '/src/assets/img/categories/coastal-landscapes.jpg', numberPhotos: 20, href: '/coastal-landscapes' },
    { title: 'Urban Art', imageUrl: '/src/assets/img/categories/urban-art.jpg', numberPhotos: 20, href: '/urban-art' },
    { title: 'International Cuisine', imageUrl: '/src/assets/img/categories/international-cuisine.jpg', numberPhotos: 20, href: '/international-cuisine' },
    { title: 'Everyday Moments', imageUrl: '/src/assets/img/categories/everyday-moments.jpg', numberPhotos: 20, href: '/everyday-moments' },
    { title: 'Underwater Wonders', imageUrl: '/src/assets/img/categories/water-wonders.jpg', numberPhotos: 20, href: '/water-wonders' },
    { title: 'Rock Art', imageUrl: '/src/assets/img/categories/rock-art.jpg', numberPhotos: 20, href: '/rock-art' },
];



export const CategoriesCard = () => {
    // const [isHovered, setIsHovered] = useState(false);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
        document.querySelectorAll('.card-category').forEach(element => {
            element.removeAttribute('data-aos');
        });
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        document.querySelectorAll('.card-category').forEach(element => {
            element.removeAttribute('data-aos');
        })
    };

    useEffect(() => {
        AOS.init({
            duration: 300,
            once: true,
        });
      }, []);

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
                        to= {category.href}
                        className={`card-category ${hoveredIndex === i ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={handleMouseLeave}
                        key={i}
                        data-aos="zoom-in"
                    >
                        <div className='gradient-layer'></div>
                        <CardMedia
                            alt={category.title}
                            component="img"
                            image={category.imageUrl}
                            className='card-category-image'
                            style={{ width: "100%", display: "block" }}
                        />
                        <Box p={2} className="text-overlay-category">
                            <Typography
                                className='title-category'
                                variant="h6"
                            >
                                {category.title}
                            </Typography>
                            <Typography
                                className='description-category'
                                variant="caption"
                                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                            >
                                {category.numberPhotos} photos
                            </Typography>
                        </Box>
                    </Link>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}
