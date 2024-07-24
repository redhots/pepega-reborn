// DynamicHeight.jsx
import React, { useEffect } from 'react';

const DynamicHeight = ({ children }) => {
    useEffect(() => {
        const setVh = () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        // Initial setting
        setVh();

        // Update on resize
        window.addEventListener('resize', setVh);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', setVh);
        };
    }, []);

    return <div>{children}</div>;
};

export default DynamicHeight;
