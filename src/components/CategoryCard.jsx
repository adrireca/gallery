import React, { useState } from 'react';
import { Card, CardMedia, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoryCard = ({ imageUrl, title, classStyle }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            className={`card-category ${isHovered ? 'hovered' : ''} ${classStyle}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // sx={{ width: '100%', height: '100%' }}
        >
            <Link to="/single">
                <div className="gradient-layer"></div>
                <CardMedia
                    component="img"
                    image={imageUrl}
                    alt={title}
                    className="card-category-image"
                    // sx={{
                    //     width: '100%',
                    //     height: '100%',
                    //     // objectFit: 'cover',
                    // }}
                />
                <Box p={2} className="text-overlay-category">
                    <Typography className='title-category' variant="h6">{title}</Typography>
                    <Typography className='description-category' variant="body2">72 photos</Typography>
                </Box>
            </Link>
        </Card>
    );
};

export default CategoryCard;
