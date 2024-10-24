import { Box, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import BackToHomeButton from './BackToHomeButton';


const images = [
    { title: 'Angel Falls', imageUrl: './assets/img/wildNature/salto-angel-venezuela.JPG', location: 'Venezuela' },
    { title: 'Mercantour National Park', imageUrl: './assets/img/wildNature/parc-mercantour.jpg', location: "France" },
    { title: 'Antarctica', imageUrl: './assets/img/wildNature/antartida.jpg', location: 'Antarctica' },
    { title: 'Antelope Canyon', imageUrl: './assets/img/wildNature/canon-antilope-eeuu.jpg', location: 'United States' },
    { title: 'Atacama Desert', imageUrl: './assets/img/wildNature/desierto-atacama-chile.jpg', location: 'Chile' },
    { title: 'Arashiyama Bamboo Grove', imageUrl: './assets/img/wildNature/bosque-arashiyama-japon.jpg', location: 'Japan' },
    { title: 'Avenue of the Baobabs', imageUrl: './assets/img/wildNature/Avenida-Baobabs-madagascar.jpg', location: 'Madagascar' },
    { title: 'Azores', imageUrl: './assets/img/wildNature/azores-portugal.jpg', location: 'Portugal' },
    { title: 'Cappadocia', imageUrl: './assets/img/wildNature/capadocia-turquia.jpg', location: 'Turkey' },
    { title: 'Banff National Park', imageUrl: './assets/img/wildNature/parque-banff-canada.jpg', location: 'Canada' },
    { title: 'Cliffs of Moher', imageUrl: './assets/img/wildNature/Acantilados-Moher-irlanda.jpg', location: 'Ireland' },
    { title: 'Denali National Park', imageUrl: './assets/img/wildNature/Parque-nacional-Denali-alaska.jpg', location: 'Alaska' },
    { title: 'Grand Canyon', imageUrl: './assets/img/wildNature/gran-cañon-eeuu.jpg', location: 'United States' },
    { title: 'Faroe Islands', imageUrl: './assets/img/wildNature/Islas-Feroe.jpg', location: 'Denmark' },
    { title: 'Isle of Skye', imageUrl: './assets/img/wildNature/Isla-Skye.jpg', location: 'Scotland' },
    { title: 'Halong Bay', imageUrl: './assets/img/wildNature/Bahía-Halong.jpg', location: 'Vietnam' },
    { title: 'Red Lagoon', imageUrl: './assets/img/wildNature/Laguna-Colorada.jpg', location: 'Bolivia' },
    { title: 'Lake Tekapo', imageUrl: './assets/img/wildNature/Lago-Tekapo.jpg', location: 'New Zealand' },
    { title: 'Lake Baikal', imageUrl: './assets/img/wildNature/Lago-Baikal.jpg', location: 'Russia' },
    { title: 'The Great Barrier Reef', imageUrl: './assets/img/wildNature/Gran-Barrera-Coral-australia.jpg', location: 'Australia' },
];



export const WildNature = () => {
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
