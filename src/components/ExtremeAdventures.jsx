import { Box, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import BackToHomeButton from './BackToHomeButton';


const images = [
    { title: 'Base Jumping', imageUrl: './assets/img/extremeAdventures/salto-base-noruega.jpg', location: 'Kjerag (Norway)' },
    { title: 'Cave Diving in Cenote Dos Ojos', imageUrl: './assets/img/extremeAdventures/dos-ojos-cenote-mexico.jpg', location: "(Mexico)" },
    { title: 'Rock Climbing on El Capitan', imageUrl: './assets/img/extremeAdventures/el-capitan.jpg', location: '(USA)' },
    { title: 'Paragliding', imageUrl: './assets/img/extremeAdventures/alpes-suizos.jpg', location: '(Swiss Alps)' },
    { title: 'Sandboarding', imageUrl: './assets/img/extremeAdventures/sandboarding.jpg', location: 'Atacama Desert (Chile)' },
    { title: 'Surfing', imageUrl: './assets/img/extremeAdventures/surfing-tahiti.jpg', location: "Teahupo'o (Tahiti)" },
    { title: 'Heli-skiing', imageUrl: './assets/img/extremeAdventures/heli-skiing-alaska.jpg', location: 'Alaska (USA)' },
    { title: 'White-water Rafting', imageUrl: './assets/img/extremeAdventures/rapidos-zimbabwe.jpg', location: 'Zambezi River (Zambia/Zimbabwe)' },
    { title: 'Trekking', imageUrl: './assets/img/extremeAdventures/treking-everest.jpg', location: 'Everest (Nepal)' },
    { title: 'Bungee Jumping', imageUrl: './assets/img/extremeAdventures/puenting-sudafrica.jpg', location: 'Bloukrans Bridge (South Africa)' },
    { title: 'Kitesurfing', imageUrl: './assets/img/extremeAdventures/kitesurf-tarifa.jpg', location: 'Tarifa (Spain)' },
    { title: 'Skydiving', imageUrl: './assets/img/extremeAdventures/paracaidas-dubai.jpg', location: 'Dubai (United Arab Emirates)' },
    { title: 'Motorcycling', imageUrl: './assets/img/extremeAdventures/carretera-bolivia.jpg', location: 'Death Road (Bolivia)' },
    { title: 'Canyoning', imageUrl: './assets/img/extremeAdventures/garganta-francia.jpg', location: 'Verdon Gorge (France)' },
    { title: 'Ice Climbing', imageUrl: './assets/img/extremeAdventures/cascadas-canada.jpg', location: 'Helmcken Falls (Canada)' },
    { title: 'Caving', imageUrl: './assets/img/extremeAdventures/cuevas-waitomo.jpg', location: 'Waitomo (New Zealand)' },
    { title: 'Hot Air Ballooning', imageUrl: './assets/img/extremeAdventures/globo-namibia.jpg', location: 'the Namib Desert (Namibia)' },
    { title: 'Mountaineering', imageUrl: './assets/img/extremeAdventures/montanismo-antartida.jpg', location: 'Mount Vinson (Antarctica)' },
    { title: 'Wildlife Safari', imageUrl: './assets/img/extremeAdventures/safari.jpg', location: 'Okavango Delta (Botswana)' },
    { title: 'Hiking the Arctic Circle', imageUrl: './assets/img/extremeAdventures/caminata-artico.jpg', location: '(Greenland)' },
];



export const ExtremeAdventures = () => {
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
                                    {img.location}
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
