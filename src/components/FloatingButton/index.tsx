"use client";
import React, { useState, useEffect } from "react";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab, CircularProgress } from "@mui/material";

const FloatingButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let progressTimeout: ReturnType<typeof setTimeout>;
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        clearTimeout(progressTimeout);

        progressTimeout = setTimeout(() => {
          const scrollTop =
            window.scrollY || document.documentElement.scrollTop;
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress = (scrollTop / totalHeight) * 100;
          setScrollProgress(progress);
          isScrolling = false;
        }, 100);
      }

      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(progressTimeout);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      {showButton && (
        <Fab
          sx={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            cursor: "pointer",
            boxShadow: "none",
            background: "transparent",
            "&:hover": {
              background: "#6BD381"
            }
          }}
          color="success"
          aria-label="Ir para o topo"
          onClick={handleButtonClick}
        >
          <CircularProgress
            variant="determinate"
            value={scrollProgress}
            size="56px"
            sx={{
              color: "#6BD381",
              position: "absolute"
            }}
          />
          <UpIcon
            sx={{
              fontSize: "40px",
              color: "#000000",
              "&:hover": {
                color: "#ffffff"
              }
            }}
          />
        </Fab>
      )}
    </div>
  );
};

export default FloatingButton;
