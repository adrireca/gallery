import { Box } from '@mui/material';
import React from 'react'

import ImageGallery from 'react-image-gallery';


const images = [
    { title: 'Angel Falls', imageUrl: 'https://picsum.photos/1920/1080', location: 'Venezuela' },
    { title: 'Mercantour National Park', imageUrl: 'https://picsum.photos/1920/1080', location: "France" },
    { title: 'Antarctica', imageUrl: '/src/assets/img/wildNature/antartida.jpg', location: 'Antarctica' },
    { title: 'Antelope Canyon', imageUrl: '/src/assets/img/wildNature/canon-antilope-eeuu.jpg', location: 'United States' },
    { title: 'Atacama Desert', imageUrl: '/src/assets/img/wildNature/desierto-atacama-chile.jpg', location: 'Chile' },
    { title: 'Arashiyama Bamboo Grove', imageUrl: '/src/assets/img/wildNature/bosque-arashiyama-japon.jpg', location: 'Japan' },
    { title: 'Avenue of the Baobabs', imageUrl: '/src/assets/img/wildNature/Avenida-Baobabs-madagascar.jpg', location: 'Madagascar' },
    { title: 'Azores', imageUrl: '/src/assets/img/wildNature/azores-portugal.jpg', location: 'Portugal' },
    { title: 'Cappadocia', imageUrl: '/src/assets/img/wildNature/capadocia-turquia.jpg', location: 'Turkey' },
    { title: 'Banff National Park', imageUrl: '/src/assets/img/wildNature/parque-banff-canada.jpg', location: 'Canada' },
    { title: 'Cliffs of Moher', imageUrl: '/src/assets/img/wildNature/Acantilados-Moher-irlanda.jpg', location: 'Ireland' },
    { title: 'Denali National Park', imageUrl: '/src/assets/img/wildNature/Parque-nacional-Denali-alaska.jpg', location: 'Alaska' },
    { title: 'Grand Canyon', imageUrl: '/src/assets/img/wildNature/gran-cañon-eeuu.jpg', location: 'United States' },
    { title: 'Faroe Islands', imageUrl: '/src/assets/img/wildNature/Islas-Feroe.jpg', location: 'Denmark' },
    { title: 'Isle of Skye', imageUrl: '/src/assets/img/wildNature/Isla-Skye.jpg', location: 'Scotland' },
    { title: 'Halong Bay', imageUrl: '/src/assets/img/wildNature/Bahía-Halong.jpg', location: 'Vietnam' },
    { title: 'Red Lagoon', imageUrl: '/src/assets/img/wildNature/Laguna-Colorada.jpg', location: 'Bolivia' },
    { title: 'Lake Tekapo', imageUrl: '/src/assets/img/wildNature/Lago-Tekapo.jpg', location: 'New Zealand' },
    { title: 'Lake Baikal', imageUrl: '/src/assets/img/wildNature/Lago-Baikal.jpg', location: 'Russia' },
    { title: 'The Great Barrier Reef', imageUrl: '/src/assets/img/wildNature/Gran-Barrera-Coral-australia.jpg', location: 'Australia' },
].map(image => ({
    original: image.imageUrl,
    thumbnail: image.imageUrl,
    description: `${image.title} - ${image.location}`,
}));

export const WildNatureTest = () => {
    return (
        <Box
            sx={{
                width: { xs: '100vw', sm: '90vw', md: '80vw', lg: '70vw' },
                height: '100vh',
                margin: 'auto',
                '& .image-gallery': {
                    height: '100%',
                },
                '& .image-gallery-slide': {
                    height: '100%',
                },
                '& .image-gallery-image': {
                    objectFit: 'cover',
                    height: '100%',
                },
            }}
        >
            <ImageGallery
                items={images}
                showThumbnails={true}
                showFullscreenButton={false}
                showPlayButton={false}
                isFullscreen={true}
            />
        </Box>
    );
}
