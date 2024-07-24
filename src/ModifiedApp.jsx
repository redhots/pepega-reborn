
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

// App.jsx
import React from 'react';
import './index.css';

function App() {
    return (
        <DynamicHeight>
            <div className="hero">
                <h1>Hero Section</h1>
            </div>
            <div className="hero2">
                <h1>Hero Section 2</h1>
            </div>
            <div className="hero3">
                <h1>Hero Section 3</h1>
            </div>
        </DynamicHeight>
    );
}

export default App;
