'use client' // Error components must be Client Components
import { useEffect } from 'react'
import { Box, Button } from '@mui/material'

export default function Error({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                minHeight: '500px',
            }}
        >
            <h2>Algo deu errado!</h2>
            <Button
                variant="contained"
                color="success"
                sx={{ mt: 2 }}
                size="large"
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Tentar novamente
            </Button>
        </Box>
    )
}