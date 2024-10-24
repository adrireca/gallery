import { Box, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import BackToHomeButton from './BackToHomeButton';


const images = [
    { title: '"Tacos al Pastor"', imageUrl: '/src/assets/img/internationalCuisine/img1-600x900.jpg', location: 'Mexico' },
    { title: 'Croissant', imageUrl: '/src/assets/img/internationalCuisine/img2-900x600.jpg', location: "France" },
    { title: 'Paella', imageUrl: '/src/assets/img/internationalCuisine/img3-900x700.jpg', location: 'Spain' },
    { title: 'Pad Thai', imageUrl: '/src/assets/img/internationalCuisine/img4-900x700.jpg', location: 'Thailand' },
    { title: 'Pizza Margherita', imageUrl: '/src/assets/img/internationalCuisine/img5-900x600.jpg', location: 'Italy' },
    { title: 'Ceviche', imageUrl: '/src/assets/img/internationalCuisine/img6-1000x1400.jpg', location: 'Peru' },
    { title: 'Butter Chicken', imageUrl: '/src/assets/img/internationalCuisine/img7-800x1200.jpg', location: 'India' },
    { title: 'Borscht', imageUrl: '/src/assets/img/internationalCuisine/img8-800x1000.jpg', location: 'Russia / Ukraine' },
    { title: 'Moussaka', imageUrl: '/src/assets/img/internationalCuisine/img9-800x1200.jpg', location: 'Greece' },
    { title: 'Feijoada', imageUrl: '/src/assets/img/internationalCuisine/img10-900x600.jpg', location: 'Brazil' },
    { title: 'Ramen', imageUrl: '/src/assets/img/internationalCuisine/img11-800x900.jpg', location: 'Japan' },
    { title: 'Sauerbraten', imageUrl: '/src/assets/img/internationalCuisine/img12-600x900.jpg', location: 'Germany' },
    { title: 'Dim Sum', imageUrl: '/src/assets/img/internationalCuisine/img13-900x700.jpg', location: 'China' },
    { title: 'Tagine', imageUrl: '/src/assets/img/internationalCuisine/img14-800x1200.webp', location: 'Morocco' },
    { title: 'Sushi', imageUrl: '/src/assets/img/internationalCuisine/img15-600x800.jpg', location: 'Japan' },
    { title: 'Arepas', imageUrl: '/src/assets/img/internationalCuisine/img16-600x900.jpg', location: 'Venezuela / Colombia' },
    { title: 'Poutine', imageUrl: '/src/assets/img/internationalCuisine/img17-600x800.webp', location: 'Canada' },
    { title: 'Baklava', imageUrl: '/src/assets/img/internationalCuisine/img18-800x1200.jpg', location: 'Turkey / Greece' },
    { title: 'Tom Yum', imageUrl: '/src/assets/img/internationalCuisine/img19-800x800.jpg', location: 'Thailand' },
    { title: 'Falafel', imageUrl: '/src/assets/img/internationalCuisine/img20-900x600.jpg', location: 'Middle East' },
];



export const InternationalCuisine = () => {
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
