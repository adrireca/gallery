import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageGallery = ({ images, selectedIndex, onClose, onChange }) => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1000 }}>
            <Carousel
                selectedItem={selectedIndex}
                showThumbs={true}
                showStatus={false}
                infiniteLoop={true}
                useKeyboardArrows={true}
                autoPlay={false}
                dynamicHeight={false}
                swipeable={true}
                onChange={onChange}
                renderIndicator={false}
            >
                {images.map((img, i) => (
                    <div key={i} style={{ maxHeight: '100vh' }}>
                        <img
                            src={img.imageUrl}
                            alt={img.title}
                            style={{ maxHeight: '90vh', objectFit: 'contain' }}
                        />
                        <p className="legend">{img.title} ({img.location})</p>
                    </div>
                ))}
            </Carousel>
            <button
                style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '2rem',
                    cursor: 'pointer'
                }}
                onClick={onClose}
            >
                &times;
            </button>
        </div>
    );
};

export default ImageGallery;
