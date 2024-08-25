import { Box, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import BackToHomeButton from './BackToHomeButton';


const images = [
    { title: 'Villa Savoye', imageUrl: '/src/assets/img/modernArchitecture/modern-1.jpg', location: 'France' },
    { title: 'Fallingwater', imageUrl: '/src/assets/img/modernArchitecture/modern-2.jpg', location: "USA" },
    { title: 'Barcelona Pavilion', imageUrl: '/src/assets/img/modernArchitecture/modern-3.jpg', location: 'Spain' },
    { title: 'Guggenheim Museum', imageUrl: '/src/assets/img/modernArchitecture/modern-4.jpg', location: 'USA' },
    { title: 'Berlin Television Tower', imageUrl: '/src/assets/img/modernArchitecture/modern-5.jpg', location: 'Germany' },
    { title: 'Seagram Building', imageUrl: '/src/assets/img/modernArchitecture/modern-6.jpg', location: 'USA' },
    { title: "Salk Institute for Biological Studies", imageUrl: '/src/assets/img/modernArchitecture/modern-7.jpg', location: 'USA' },
    { title: 'Pompidou Centre', imageUrl: '/src/assets/img/modernArchitecture/modern-8.jpg', location: 'France' },
    { title: 'John Hancock Tower', imageUrl: '/src/assets/img/modernArchitecture/modern-9.jpeg', location: 'USA' },
    { title: 'Farnsworth House', imageUrl: '/src/assets/img/modernArchitecture/modern-10.jpg', location: 'USA' },
    { title: 'Ronchamp Chapel', imageUrl: '/src/assets/img/modernArchitecture/modern-11.jpg', location: 'France' },
    { title: 'Malaparte House', imageUrl: '/src/assets/img/modernArchitecture/modern-12.jpg', location: 'Italy' },
    { title: 'Taichung National Theater', imageUrl: '/src/assets/img/modernArchitecture/modern-13.jpg', location: 'Taiwan' },
    { title: 'BBVA Bancomer Tower', imageUrl: '/src/assets/img/modernArchitecture/modern-14.jpg', location: 'Mexico' },
    { title: 'National Museum of Brasilia', imageUrl: '/src/assets/img/modernArchitecture/modern-15.jpg', location: 'Brazil' },
    { title: 'Hearst Tower', imageUrl: '/src/assets/img/modernArchitecture/modern-16.jpg', location: 'USA' },
    { title: 'Seattle Central Library', imageUrl: '/src/assets/img/modernArchitecture/modern-17.jpg', location: 'USA' },
    { title: 'Guggenheim Museum Bilbao', imageUrl: '/src/assets/img/modernArchitecture/modern-18.jpg', location: 'Spain' },
    { title: 'Louvre Abu Dhabi', imageUrl: '/src/assets/img/modernArchitecture/modern-19.jpg', location: 'United Arab Emirates' },
    { title: "Sydney Opera House", imageUrl: '/src/assets/img/modernArchitecture/modern-20.jpg', location: 'Australia' },
];



export const ModernArchitecture = () => {
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
