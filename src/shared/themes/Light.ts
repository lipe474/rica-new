'use client'
import { createTheme } from '@mui/material';


export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#4caf50',
            light: '#80e27e',
            dark: '#087f23',
            contrastText: '#fff',
        },
        secondary: {
            main: '#ff9800',
            light: '#ffc947',
            dark: '#c66900',
            contrastText: '#fff',
        },
        error: {
            main: '#f44336',
            light: '#e57373',
            dark: '#d32f2f',
            contrastText: '#fff',
        },
        warning: {
            main: '#ffeb3b',
            light: '#fff350',
            dark: '#fdd835',
            contrastText: '#fff',
        },
        info: {
            main: '#2196f3',
            light: '#64b5f6',
            dark: '#1976d2',
            contrastText: '#fff',
        },
        success: {
            main: '#4caf50',
            light: '#80e27e',
            dark: '#087f23',
            contrastText: '#fff',
        },
        background: {
            default: '#fff',
            paper: '#fff',
        },

    },
    typography: {
        fontFamily: 'Poppins, Roboto, sans-serif',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontSize: '3rem',
            fontWeight: 700,
            lineHeight: 1.167,
            letterSpacing: '-0.01562em',
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.00833em',
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.167,
            letterSpacing: '0em',
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: 1.235,
            letterSpacing: '0.00735em',
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 700,
            lineHeight: 1.334,
            letterSpacing: '0em',
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: 1.6,
            letterSpacing: '0.0075em',
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.75,
            letterSpacing: '0.00938em',
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.57,
            letterSpacing: '0.00714em',
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '0.00938em',
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.43,
            letterSpacing: '0.01071em',
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.75,
            letterSpacing: '0.02857em',
            textTransform: 'uppercase',
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.66,
            letterSpacing: '0.03333em',
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 2.66,
            letterSpacing: '0.08333em',
            textTransform: 'uppercase',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },



});
