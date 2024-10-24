import { Box, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import BackToHomeButton from './BackToHomeButton';


const images = [
    { title: 'Eduardo Kobra Graffiti', imageUrl: '/src/assets/img/urbanArt/img1-600x900.jpg', location: 'Brazil' },
    { title: 'Shepard Fairey Artwork', imageUrl: '/src/assets/img/urbanArt/img2-900x600.jpg', location: "United States" },
    { title: 'Banksy Mural', imageUrl: '/src/assets/img/urbanArt/img3-900x700.jpeg', location: 'London' },
    { title: 'ROA Murals', imageUrl: '/src/assets/img/urbanArt/img4-900x700.jpg', location: 'Belgium' },
    { title: 'Swoon Graffiti', imageUrl: '/src/assets/img/urbanArt/img5-900x600.jpg', location: 'United States' },
    { title: '"La Madre Secular" Mural by INTI', imageUrl: '/src/assets/img/urbanArt/img6-1000x1400.jpg', location: 'Chile' },
    { title: 'Etam Cru Murals', imageUrl: '/src/assets/img/urbanArt/img7-800x1200.jpg', location: 'Poland' },
    { title: 'JR Art', imageUrl: '/src/assets/img/urbanArt/img8-800x1000.jpg', location: 'France' },
    { title: 'Retna Mural', imageUrl: '/src/assets/img/urbanArt/img9-800x1200.jpg', location: 'United States' },
    { title: '"The Kiss" by Xemaáta', imageUrl: '/src/assets/img/urbanArt/img10-900x600.jpg', location: 'Germany' },
    { title: '"El Pez"', imageUrl: '/src/assets/img/urbanArt/img11-800x900.jpg', location: 'Colombia' },
    { title: 'Okuda San Miguel Mural', imageUrl: '/src/assets/img/urbanArt/img12-600x900.jpg', location: 'Spain' },
    { title: 'Os Gemeos Mural', imageUrl: '/src/assets/img/urbanArt/img13-900x700.jpg', location: 'Portugal' },
    { title: 'Blu Mural', imageUrl: '/src/assets/img/urbanArt/img14-800x1200.jpg', location: 'Italy' },
    { title: 'Miss Van Graffiti', imageUrl: '/src/assets/img/urbanArt/img15-600x800.jpg', location: 'Spain' },
    { title: 'Aryz Murals', imageUrl: '/src/assets/img/urbanArt/img16-600x900.jpg', location: 'Spain' },
    { title: 'Phlegm Art', imageUrl: '/src/assets/img/urbanArt/img17-600x800.jpg', location: 'UK' },
    { title: 'Vhils Graffiti', imageUrl: '/src/assets/img/urbanArt/img18-800x1200.jpg', location: 'Portugal' },
    { title: 'Girl with Balloon by Banksy', imageUrl: '/src/assets/img/urbanArt/img19-800x800.jpg', location: 'UK' },
    { title: 'The Peace Wall', imageUrl: '/src/assets/img/urbanArt/img20-900x600.jpg', location: 'Northern Ireland' },
];



export const UrbanArt = () => {
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
