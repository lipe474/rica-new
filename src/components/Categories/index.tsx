import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import { Category } from '@/data/@types/category';
import { Line } from '../Line';

interface CategoriasListProps {
    categories: Category[];
}

const CategoriasList: React.FC<CategoriasListProps> = ({ categories }) => {
    return (
        <Box sx={{ width: '100%', }}>
            <Line color="#000000" />
            <List
                component='nav'
                subheader={
                    <Typography
                        component="div"
                        fontFamily="'Poppins', sans-serif"
                        sx={{
                            fontWeight: '600',
                            fontSize: '18px',
                            lineHeight: '2',
                            background: 'transparent',
                            verticalAlign: 'baseline',
                            m: '1rem 0 1rem 0'
                        }}
                    >
                        Categorias
                    </Typography>
                }
            >
                {categories.map((categoria) => (
                    <ListItem disablePadding>
                        <ListItemButton sx={{ pl: 0 }}>
                            <ListItemText
                                primary={categoria.name}
                                sx={{
                                    "span": {
                                        fontFamily: "'Poppins', sans-serif"
                                    }
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Box>
    );
}

export default CategoriasList;

