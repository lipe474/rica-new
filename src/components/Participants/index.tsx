
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import { Avatar, CardHeader, Typography } from '@mui/material';

const Participants = [
    {
        name: 'Fernando Kawahara',
        description: 'Fala sobre tudo que é tendência na tecnologia e fez uns tutoriais de vez em quando.',
    },
    {
        name: 'Lucas Santos',
        description: 'Fala sobre tudo que é tendência na tecnologia e fez uns tutoriais de vez em quando.',
    },
    {
        name: 'Salomão Filho',
        description: 'Fala sobre tudo que é tendência na tecnologia e fez uns tutoriais de vez em quando.',
    },

]

export default function ListParticipants() {


    return (
        <Box sx={{ width: '100%', }}>

            <Divider
                sx={{
                    borderColor: 'black',
                    borderBottomWidth: '3px'
                }}
            />
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
                        Quem Faz a RICA
                    </Typography>
                }
            >
                {Participants.map((participants) => (
                    <ListItem disablePadding key={participants.name}>
                        <ListItemButton sx={{ pl: 0 }}>


                            <CardHeader
                                sx={{ pl: 0, fontFamily: "'Poppins', sans-serif" }}
                                avatar={
                                    <Avatar
                                        alt={participants.name}
                                        src={participants.name}
                                        sx={{ width: 80, height: 80 }}
                                    />
                                }

                                title={
                                    <Typography component="div" fontWeight={'600'} >
                                        {participants.name}
                                    </Typography>}
                                subheader={participants.description}
                            />

                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Box>
    );
}

