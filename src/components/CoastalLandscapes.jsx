import { Box, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import BackToHomeButton from './BackToHomeButton';


const images = [
    { title: 'Big Sur', imageUrl: '/src/assets/img/coastalLandscapes/img1-600x900.jpg', location: 'United States' },
    { title: 'Navagio Beach', imageUrl: '/src/assets/img/coastalLandscapes/img2-900x600.jpg', location: "Greece" },
    { title: 'Cliffs of Moher', imageUrl: '/src/assets/img/coastalLandscapes/img3-900x700.jpg', location: 'Ireland' },
    { title: 'Lofoten Islands', imageUrl: '/src/assets/img/coastalLandscapes/img4-900x700.jpg', location: 'Norway' },
    { title: 'Great Ocean Road', imageUrl: '/src/assets/img/coastalLandscapes/img5-900x600.jpg', location: 'Australia' },
    { title: 'Amalfi Coast', imageUrl: '/src/assets/img/coastalLandscapes/img6-1000x1400.jpg', location: 'Italy' },
    { title: 'Bay of Fundy', imageUrl: '/src/assets/img/coastalLandscapes/img7-800x1200.jpg', location: 'Canada' },
    { title: 'Cape of Good Hope', imageUrl: '/src/assets/img/coastalLandscapes/img8-800x1000.jpg', location: 'South Africa' },
    { title: 'Santorini', imageUrl: '/src/assets/img/coastalLandscapes/img9-800x1200.jpg', location: 'Greece' },
    { title: 'Halong Bay', imageUrl: '/src/assets/img/coastalLandscapes/img10-900x600.jpg', location: 'Vietnam' },
    { title: 'Hidden Beach', imageUrl: '/src/assets/img/coastalLandscapes/img11-800x900.jpg', location: 'Mexico' },
    { title: 'Geiranger Fjords', imageUrl: '/src/assets/img/coastalLandscapes/img12-600x900.jpg', location: 'Norway' },
    { title: 'Riviera Maya', imageUrl: '/src/assets/img/coastalLandscapes/img13-900x700.jpg', location: 'Mexico' },
    { title: 'Phang Nga Bay', imageUrl: '/src/assets/img/coastalLandscapes/img14-800x1200.jpg', location: 'Thailand' },
    { title: 'Cliffs of Étretat', imageUrl: '/src/assets/img/coastalLandscapes/img15-600x800.jpg', location: 'France' },
    { title: 'Seychelles Islands', imageUrl: '/src/assets/img/coastalLandscapes/img16-600x900.jpg', location: 'Indian Ocean' },
    { title: 'Cathedrals Beach', imageUrl: '/src/assets/img/coastalLandscapes/img17-600x800.jpg', location: 'Spain' },
    { title: 'Whitehaven Beach', imageUrl: '/src/assets/img/coastalLandscapes/img18-800x1200.jpg', location: 'Australia' },
    { title: 'Isle of Skye', imageUrl: '/src/assets/img/coastalLandscapes/img19-800x800.jpg', location: 'Scotland' },
    { title: 'Galápagos Islands', imageUrl: '/src/assets/img/coastalLandscapes/img20-900x600.jpg', location: 'Ecuador' },
];



export const CoastalLandscapes = () => {
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
