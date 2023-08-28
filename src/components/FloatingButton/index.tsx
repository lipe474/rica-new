'use client'
import React, { useState, useEffect } from 'react';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from '@mui/material';

const FloatingButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showButton && (
        <Fab
          sx={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            cursor: 'pointer',
            boxShadow: 'none',
            background: 'transparent',
            border: '4px solid #6BD381',
            "&:hover": {
              background: '#6BD381', 
            }
          }}
          color="success"
          aria-label="Ir para o topo"
          onClick={handleButtonClick}
        >
          <UpIcon
            sx={{
              fontSize: '40px',
              color: '#000000',
              "&:hover": { 
                color: '#ffffff'
              }
            }}
          />
        </Fab>
      )}
    </div>
  );
};

export default FloatingButton;

