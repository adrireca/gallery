import { Box, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import BackToHomeButton from './BackToHomeButton';


const images = [
    { title: 'Bunaken Marine Park', imageUrl: '/src/assets/img/underwaterWonders/img1-600x900.jpg', location: 'Indonesia' },
    { title: 'Great Barrier Reef', imageUrl: '/src/assets/img/underwaterWonders/img2-900x600.jpg', location: "Australia" },
    { title: 'SS Thistlegorm Wreck (Red Sea)', imageUrl: '/src/assets/img/underwaterWonders/img3-900x700.webp', location: 'Egypt' },
    { title: 'Palancar Reef', imageUrl: '/src/assets/img/underwaterWonders/img4-900x700.jpg', location: 'Mexico' },
    { title: 'Cenote Dos Ojos', imageUrl: '/src/assets/img/underwaterWonders/img5-900x600.jpg', location: 'Mexico' },
    { title: 'Coral Gardens', imageUrl: '/src/assets/img/underwaterWonders/img6-1000x1400.jpg', location: 'Fiji' },
    { title: 'Tubbataha Reefs', imageUrl: '/src/assets/img/underwaterWonders/img7-800x1200.jpg', location: 'Philippines' },
    { title: 'Yongala Shipwreck', imageUrl: '/src/assets/img/underwaterWonders/img8-800x1000.jpg', location: 'Australia' },
    { title: 'Ningaloo Reef', imageUrl: '/src/assets/img/underwaterWonders/img9-800x1200.jpg', location: 'Australia' },
    { title: 'Titanic Wreck', imageUrl: '/src/assets/img/underwaterWonders/img10-900x600.jpg', location: 'Atlantic Ocean' },
    { title: 'The Blue Hole', imageUrl: '/src/assets/img/underwaterWonders/img11-800x900.webp', location: 'Belize' },
    { title: 'Orda Underwater Caves', imageUrl: '/src/assets/img/underwaterWonders/img12-600x900.jpg', location: 'Russia' },
    { title: 'Cathedral of Wrecks', imageUrl: '/src/assets/img/underwaterWonders/img13-900x700.jpg', location: 'Malta' },
    { title: 'White Beach of Boracay', imageUrl: '/src/assets/img/underwaterWonders/img14-800x1200.webp', location: 'Philippines' },
    { title: 'Cenote Angelita', imageUrl: '/src/assets/img/underwaterWonders/img15-600x800.jpg', location: 'Mexico' },
    { title: 'Maldives', imageUrl: '/src/assets/img/underwaterWonders/img16-600x900.jpg', location: 'Indian Ocean' },
    { title: 'Grotto of Saipan', imageUrl: '/src/assets/img/underwaterWonders/img17-600x800.webp', location: 'Northern Mariana Islands' },
    { title: 'Sipadan Island', imageUrl: '/src/assets/img/underwaterWonders/img18-800x1200.jpg', location: 'Malaysia' },
    { title: 'Jellyfish Lake', imageUrl: '/src/assets/img/underwaterWonders/img19-800x800.jpg', location: 'Palau' },
    { title: 'Galápagos Islands', imageUrl: '/src/assets/img/underwaterWonders/img20-900x600.jpg', location: 'Ecuador' },
];



export const UnderwaterWonders = () => {
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
