// BackToHomeButton.jsx
import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const BackToHomeButton = () => {
    return (
        <Link to="/">
            <Box className="back-to-home">
                Back
            </Box>
        </Link>
    );
};

export default BackToHomeButton;
