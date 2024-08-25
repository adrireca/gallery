import { Box, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import BackToHomeButton from './BackToHomeButton';


const images = [
    { title: 'Giant Sequoia', imageUrl: '/src/assets/img/floraAndFauna/img1-600x900.jpg', location: 'United States' },
    { title: 'Bengal Tiger', imageUrl: '/src/assets/img/floraAndFauna/img2-900x600.jpg', location: "India" },
    { title: 'Baobab', imageUrl: '/src/assets/img/floraAndFauna/img3-900x700.jpg', location: 'Africa, Madagascar, Australia' },
    { title: 'Bald Eagle', imageUrl: '/src/assets/img/floraAndFauna/img4-900x700.jpg', location: 'United States' },
    { title: 'Cherry Blossom', imageUrl: '/src/assets/img/floraAndFauna/img5-900x600.jpg', location: 'Japan' },
    { title: 'African Elephant', imageUrl: '/src/assets/img/floraAndFauna/img6-1000x1400.jpg', location: 'Sub-Saharan Africa' },
    { title: 'Rafflesia', imageUrl: '/src/assets/img/floraAndFauna/img7-800x1200.jpg', location: 'Southeast Asia' },
    { title: 'Emperor Penguin', imageUrl: '/src/assets/img/floraAndFauna/img8-800x1000.jpg', location: 'Antarctica' },
    { title: 'Venus Flytrap', imageUrl: '/src/assets/img/floraAndFauna/img9-800x1200.jpg', location: 'United States' },
    { title: 'Red Kangaroo', imageUrl: '/src/assets/img/floraAndFauna/img10-900x600.jpg', location: 'Australia' },
    { title: 'Mangroves', imageUrl: '/src/assets/img/floraAndFauna/img11-800x900.jpg', location: 'Tropical Coastal Regions' },
    { title: 'Giant Panda', imageUrl: '/src/assets/img/floraAndFauna/img12-600x900.jpg', location: 'China' },
    { title: 'Tree Fern', imageUrl: '/src/assets/img/floraAndFauna/img13-900x700.jpg', location: 'Tropical and Subtropical Forests' },
    { title: 'Poison Dart Frog', imageUrl: '/src/assets/img/floraAndFauna/img14-800x1200.jpeg', location: 'Central and South America' },
    { title: 'Orchids', imageUrl: '/src/assets/img/floraAndFauna/img15-600x800.jpg', location: 'Global' },
    { title: 'Saguaro Cactus', imageUrl: '/src/assets/img/floraAndFauna/img16-600x900.jpg', location: 'United States' },
    { title: 'Galápagos Tortoise', imageUrl: '/src/assets/img/floraAndFauna/img17-600x800.jpg', location: 'Galápagos Islands' },
    { title: 'Ginkgo', imageUrl: '/src/assets/img/floraAndFauna/img18-800x1200.jpg', location: 'China' },
    { title: 'Jaguar', imageUrl: '/src/assets/img/floraAndFauna/img19-800x800.jpg', location: 'Central and South America' },
    { title: 'Blue Whale', imageUrl: '/src/assets/img/floraAndFauna/img20-900x600.jpg', location: 'Global Oceans' },
];



export const FloraAndFauna = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [galleryIndex, setGalleryIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleImageClick = (index) => {
        setGalleryIndex(index);
    };

    const handleCloseGallery = () => {
        setGalleryIndex(null);
    };


    return (
        <>
            <BackToHomeButton />
            <ResponsiveMasonry
                columnsCountBreakPoints={{
                    350: 1, 500: 2, 750: 3, 900: 4
                }}
            >
                <Masonry
                    columnsCount={4}
                >
                    {images.map((img, i) => (
                        <Link
                            to=""
                            className={`card-category ${hoveredIndex === i ? 'hovered' : ''}`}
                            onMouseEnter={() => handleMouseEnter(i)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleImageClick(i)}
                            key={i}
                        >
                            <div className='gradient-layer'></div>
                            <CardMedia
                                alt={img.title}
                                component="img"
                                image={img.imageUrl}
                                className='card-category-image'
                                style={{ width: "100%", display: "block" }}
                            />
                            <Box p={2} className="text-overlay-category">
                                <Typography
                                    className='title-category'
                                    variant="h6"
                                >
                                    {img.title}
                                </Typography>
                                <Typography
                                    className='description-category'
                                    variant="caption"
                                    sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                                >
                                    ({img.location})
                                </Typography>
                            </Box>
                        </Link>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            {galleryIndex !== null && (
                <ImageGallery
                    images={images}
                    selectedIndex={galleryIndex}
                    onClose={handleCloseGallery}
                    onChange={(index) => setGalleryIndex(index)}
                />
            )}
        </>
    )
}
