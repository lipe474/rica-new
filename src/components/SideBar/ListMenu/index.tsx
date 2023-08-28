'use client'
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CategoryItem } from '@/data/@types';
import { getCategories } from '@/api';
import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import Link from 'next/link';

interface Props {
    icon: React.ReactNode;
    text: string;
}

const ListMenu = ({ icon, text }: Props) => {
    const [categories, setCategories] = React.useState<CategoryItem[]>([])
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {
        getCategories().then((categories) => {
            setCategories(categories)
        })
    }, [])

    return (
        <div>
            <ListItem key={text} disablePadding>
                <ListItemButton
                    component="button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText>
                        <Box
                            sx={{
                                color: 'inherit',
                                fontSize: 'inherit',
                                border: 'inherit',
                                width: '100%',
                                textAlign: 'left',
                                backgroundColor: 'transparent',
                                height: '25px',
                                cursor: 'pointer',

                            }}

                        >
                            {text}
                        </Box>
                    </ListItemText>
                </ListItemButton>
            </ListItem>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose} sx={{ maxWidth: 320 }}
            >
                {categories?.length > 0 &&
                    categories.map((item: CategoryItem) => (
                        <Link href={`/articlesbycategory/${item.id}`} key={item.id} >
                            <MenuItem>
                                <Typography variant="inherit" noWrap  >
                                    {item.name}
                                </Typography>
                            </MenuItem>
                        </Link>
                    ))}
            </Menu>
        </div >
    );
}

export default ListMenu