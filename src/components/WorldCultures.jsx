import { Box, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import BackToHomeButton from './BackToHomeButton';


const images = [
    { title: 'Diwali', imageUrl: './assets/img/worldCultures/img1-600x900.jpg', location: 'India' },
    { title: 'Chinese New Year Festival', imageUrl: './assets/img/worldCultures/img2-900x600.jpg', location: "China" },
    { title: 'Ramadan', imageUrl: './assets/img/worldCultures/img3-900x700.jpg', location: 'Arab Culture' },
    { title: 'Tea Ceremony', imageUrl: './assets/img/worldCultures/img4-900x700.jpeg', location: 'Japan' },
    { title: 'Holy Week', imageUrl: './assets/img/worldCultures/img5-900x600.jpg', location: 'Spain' },
    { title: 'Day of the Dead', imageUrl: './assets/img/worldCultures/img6-1000x1400.jpg', location: 'Mexico' },
    { title: 'Orthodox Wedding', imageUrl: './assets/img/worldCultures/img7-800x1200.jpg', location: 'Russia' },
    { title: 'Classical Ballet', imageUrl: './assets/img/worldCultures/img8-800x1000.jpg', location: 'Russia' },
    { title: 'Venice Carnival', imageUrl: './assets/img/worldCultures/img9-800x1200.jpg', location: 'Italy' },
    { title: 'Inti Raymi', imageUrl: './assets/img/worldCultures/img10-900x600.jpg', location: 'Inca Culture' },
    { title: 'Mummification Ritual', imageUrl: './assets/img/worldCultures/img11-800x900.jpg', location: 'Ancient Egypt' },
    { title: 'Ball Game', imageUrl: './assets/img/worldCultures/img12-600x900.jpg', location: 'Maya Culture' },
    { title: 'Griot', imageUrl: './assets/img/worldCultures/img13-900x700.jpg', location: 'Sub-Saharan Africa' },
    { title: 'Rio de Janeiro Carnival', imageUrl: './assets/img/worldCultures/img14-800x1200.jpg', location: 'Brazil' },
    { title: 'Hangeul Day', imageUrl: './assets/img/worldCultures/img15-600x800.jpg', location: 'Korea' },
    { title: 'Midsummer Festival', imageUrl: './assets/img/worldCultures/img16-600x900.jpg', location: 'Sweden, Nordic Culture' },
    { title: 'Nowruz', imageUrl: './assets/img/worldCultures/img17-600x800.jpg', location: 'Iran, Persian Culture' },
    { title: 'Walkabout', imageUrl: './assets/img/worldCultures/img18-800x1200.jpg', location: 'Aboriginal Australians' },
    { title: 'Trinidad and Tobago Carnival', imageUrl: './assets/img/worldCultures/img19-800x800.jpg', location: 'Caribbean Culture' },
    { title: 'Thanksgiving', imageUrl: './assets/img/worldCultures/img20-900x600.jpg', location: 'United States, American Culture' },
];



export const WorldCultures = () => {
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
