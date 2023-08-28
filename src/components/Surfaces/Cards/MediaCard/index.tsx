
import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

interface MediaCardProps {
    id: string;
    name?: string;
    title: string;
    image: string;
}



export default function MediaCard({ id, image, title }: MediaCardProps) {

    return (
        <Box sx={{
            maxWidth: 345,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
        }}>
            <Box
                component="img"
                sx={{
                    width: '100%',
                    height: 350,
                    objectFit: 'cover',  
                }}
                alt={title}
                src={image}
            />
            <Typography variant="subtitle1" color={'white'}  textAlign={'center'} >
                {title}
            </Typography>
            <Link href={`/article/${id}`}>
                <Button
                    variant="contained"
                    size="large"
                    color="success"
                    sx={{
                        borderRadius: 40,
                        backgroundColor: '#42AF59',
                        color: '#ffffff',
                        border: 'none',
                        "&:hover": {
                            backgroundColor: '#42AF59',
                        },
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        width: '200px',
                        textTransform: 'none',


                    }}
                >
                    Ler Matéria
                </Button>

            </Link>

        </Box>
    );
}