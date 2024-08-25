import { Box, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import BackToHomeButton from './BackToHomeButton';


const images = [
    { title: 'Jerusalem', imageUrl: '/src/assets/img/historicCities/jerusalem-israel.jpg', location: 'Israel' },
    { title: 'Rome', imageUrl: '/src/assets/img/historicCities/roma-italia.jpg', location: "Italy" },
    { title: 'Athens', imageUrl: '/src/assets/img/historicCities/atenas-grecia.jpg', location: 'Greece' },
    { title: 'Cairo', imageUrl: '/src/assets/img/historicCities/cairo-egipto.jpg', location: 'Egypt' },
    { title: 'Istanbul', imageUrl: '/src/assets/img/historicCities/estanbul-turquia.jpg', location: 'Turkey' },
    { title: 'Beijing', imageUrl: '/src/assets/img/historicCities/beijing-china.jpg', location: 'China' },
    { title: 'Marrakech', imageUrl: '/src/assets/img/historicCities/marrakech-marruecos.jpg', location: 'Morocco' },
    { title: 'Kyoto', imageUrl: '/src/assets/img/historicCities/kyoto-japon.jpg', location: 'Japan' },
    { title: 'Baghdad', imageUrl: '/src/assets/img/historicCities/baghdad-iraq.jpg', location: 'Iraq' },
    { title: 'Alexandria', imageUrl: '/src/assets/img/historicCities/alexandria-egipto.jpg', location: 'Egypt' },
    { title: 'Jericho', imageUrl: '/src/assets/img/historicCities/jerico-palestina.jpg', location: 'Palestine' },
    { title: 'Granada', imageUrl: '/src/assets/img/historicCities/granada-espanya.jpg', location: 'Spain' },
    { title: 'Lisbon', imageUrl: '/src/assets/img/historicCities/lisboa-portugal.jpg', location: 'Portugal' },
    { title: 'Quito', imageUrl: '/src/assets/img/historicCities/quito-ecuador.jpg', location: 'Ecuador' },
    { title: 'Barcelona', imageUrl: '/src/assets/img/historicCities/barcelona-espanya.jpg', location: 'Spain' },
    { title: 'Moscow', imageUrl: '/src/assets/img/historicCities/moscu-rusia.jpg', location: 'Russia' },
    { title: 'Petra', imageUrl: '/src/assets/img/historicCities/petra-jordania.jpg', location: 'Jordan' },
    { title: 'Helsinki', imageUrl: '/src/assets/img/historicCities/helsinki-finlandia.jpg', location: 'Finland' },
    { title: 'Tunis', imageUrl: '/src/assets/img/historicCities/tunez-tunez.jpg', location: 'Tunisia' },
    { title: 'Sofia', imageUrl: '/src/assets/img/historicCities/sofia-bulgaria.jpg', location: 'Bulgaria' },
];



export const HistoricCities = () => {
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
