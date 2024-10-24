import { Box, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import BackToHomeButton from './BackToHomeButton';


const images = [
    { title: 'Spice Market in Marrakech', imageUrl: './assets/img/everydayMoments/img1-600x900.webp', location: 'Morocco' },
    { title: 'Rush Hour on the Tokyo Metro', imageUrl: './assets/img/everydayMoments/img2-900x600.jpg', location: "Japan" },
    { title: 'Outdoor Café in Paris', imageUrl: './assets/img/everydayMoments/img3-900x700.webp', location: 'France' },
    { title: 'Women Weaving in the Andes', imageUrl: './assets/img/everydayMoments/img4-900x700.jpg', location: 'Peru' },
    { title: 'Children Playing in the Streets of Havana', imageUrl: './assets/img/everydayMoments/img5-900x600.jpg', location: 'Cuba' },
    { title: 'Tea Ceremony in Kyoto', imageUrl: './assets/img/everydayMoments/img6-1000x1400.jpeg', location: 'Japan' },
    { title: 'Breakfast at a Bakery in Lisbon', imageUrl: './assets/img/everydayMoments/img7-800x1200.jpg', location: 'Portugal' },
    { title: 'Street Food Stalls in Bangkok', imageUrl: './assets/img/everydayMoments/img8-800x1000.jpg', location: 'Thailand' },
    { title: 'Cyclists in Amsterdam', imageUrl: './assets/img/everydayMoments/img9-800x1200.jpg', location: 'Netherlands' },
    { title: 'Main Square During a Local Festival', imageUrl: './assets/img/everydayMoments/img10-900x600.jpg', location: 'Mexico' },
    { title: 'Sunset on Copacabana Beach', imageUrl: './assets/img/everydayMoments/img11-800x900.jpg', location: 'Brazil' },
    { title: 'Laundresses by the Ganges River in Varanasi', imageUrl: './assets/img/everydayMoments/img12-600x900.jpg', location: 'India' },
    { title: 'Afternoon in a Park in Buenos Aires', imageUrl: './assets/img/everydayMoments/img13-900x700.jpg', location: 'Argentina' },
    { title: 'Fishing on the Kerala Canals', imageUrl: './assets/img/everydayMoments/img14-800x1200.jpg', location: 'India' },
    { title: 'Sunset in the Sahara Desert', imageUrl: './assets/img/everydayMoments/img15-600x800.jpg', location: 'Morocco' },
    { title: 'Street Café in Istanbul', imageUrl: './assets/img/everydayMoments/img16-600x900.webp', location: 'Turkey' },
    { title: 'Women Shopping in a Souk in Cairo', imageUrl: './assets/img/everydayMoments/img17-600x800.webp', location: 'Egypt' },
    { title: 'Bustling Streets in New York City', imageUrl: './assets/img/everydayMoments/img18-800x1200.jpg', location: 'United States' },
    { title: 'Gondola Ride in Venice', imageUrl: './assets/img/everydayMoments/img19-800x800.jpg', location: 'Italy' },
    { title: 'Fruit Vendors at a Floating Market', imageUrl: './assets/img/everydayMoments/img20-900x600.webp', location: 'Vietnam' },
];



export const EverydayMoments = () => {
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
