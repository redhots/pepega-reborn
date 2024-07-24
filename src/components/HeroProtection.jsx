import { useEffect } from "react";

const HeroSection = ({ className, children }) => {
    useEffect(() => {
      const handleResize = () => {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
      };
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <div className={className} style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
        {children}
      </div>
    );
  };
  export default HeroSection;