import { Box, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import BackToHomeButton from './BackToHomeButton';


const images = [
    { title: 'Altamira Cave', imageUrl: './assets/img/rockArt/img1-600x900.jpg', location: 'Spain' },
    { title: 'Lascaux Caves', imageUrl: './assets/img/rockArt/img2-900x600.webp', location: 'France' },
    { title: 'Bhimbetka Rock Shelters', imageUrl: './assets/img/rockArt/img3-900x700.jpg', location: 'India' },
    { title: 'El Castillo Cave', imageUrl: './assets/img/rockArt/img4-900x700.jpg', location: 'Spain' },
    { title: 'Chauvet Cave', imageUrl: './assets/img/rockArt/img5-900x600.jpg', location: 'France' },
    { title: 'Serra da Capivara Caves', imageUrl: './assets/img/rockArt/img6-1000x1400.jpg', location: 'Brazil' },
    { title: 'Kakadu National Park', imageUrl: './assets/img/rockArt/img7-800x1200.jpg', location: 'Australia' },
    { title: 'Loltún Cave', imageUrl: './assets/img/rockArt/img8-800x1000.jpg', location: 'Mexico' },
    { title: 'Tsodilo Hills', imageUrl: './assets/img/rockArt/img9-800x1200.jpg', location: 'Botswana' },
    { title: 'Tadrart Acacus Rock Art', imageUrl: './assets/img/rockArt/img10-900x600.jpg', location: 'Libya' },
    { title: 'Twyfelfontein Rock Engravings', imageUrl: './assets/img/rockArt/img11-800x900.jpg', location: 'Namibia' },
    { title: 'Val Camonica Petroglyphs', imageUrl: './assets/img/rockArt/img12-600x900.jpg', location: 'Italy' },
    { title: 'Laas Geel Caves', imageUrl: './assets/img/rockArt/img13-900x700.webp', location: 'Somalia' },
    { title: 'Cueva de las Manos', imageUrl: './assets/img/rockArt/img14-800x1200.jpg', location: 'Argentina' },
    { title: 'Magura Cave', imageUrl: './assets/img/rockArt/img15-600x800.jpg', location: 'Bulgaria' },
    { title: 'Niaux Cave', imageUrl: './assets/img/rockArt/img16-600x900.jpg', location: 'France' },
    { title: 'Foz Côa Valley', imageUrl: './assets/img/rockArt/img17-600x800.webp', location: 'Portugal' },
    { title: 'Mount Bego Petroglyphs', imageUrl: './assets/img/rockArt/img18-800x1200.jpg', location: 'France / Italy' },
    { title: 'Les Eyzies Caves', imageUrl: './assets/img/rockArt/img19-800x800.jpg', location: 'France' },
    { title: 'Ennedi Massif Rock Art', imageUrl: './assets/img/rockArt/img20-900x600.jpg', location: 'Chad' },
];



export const RockArt = () => {
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
