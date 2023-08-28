// 'use client'

import { Box,  Stack,  Typography } from "@mui/material"

import news from '../../../public/assets/img/news.png'
 

export default function CardWithIllustration() {
    return (
        <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingY={"80px"}
        > 
            <Stack
                boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                width="580px"
                height={"400px"}
                borderRadius={"16px"}
                alignItems={'center'}
                justifyContent={'center'}
                paddingY={"30px"}
                gap={4}
            >
                <Box
                    component="img"
                    src={news.src}
                    alt="newsletters"
                    width="121px"

                />
                <Box textAlign="center">
                    <Typography
                        color="#1a202c"
                        fontWeight={700}
                        
                    >
                        SE INSCREVER
                    </Typography>
                    <Typography
                        color="#718096"
                        fontWeight={500}
                        
                        fontSize="1.125rem"
                    >
                        Assine nossa newsletter e fique atualizado!
                    </Typography>
                </Box>
                <Stack gap={2} flexDirection={"row"} width="90%">

                    <Box
                        component="input"
                        type={'email'}
                        sx={{
                            bgcolor: "#edf2f7",
                            borderColor: "#e2e8f0",
                            borderRadius: "9rem",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            color: "#718096",
                            display: "block",
                            fontSize: "0.875rem",
                            fontWeight: 400,
                            height: "40px",
                            lineHeight: "1.25",
                            padding: "0.5rem 0.75rem",
                            transitionDuration: "0.15s",
                            transitionProperty: "background-color, border-color, box-shadow",
                            transitionTimingFunction: "ease-in-out",
                            width: "100%",
                            ":focus": {
                                outline: "0",
                                boxShadow: "0 0 0 3px  rgba(66, 175, 89, 0.5)",
                                borderColor:  "#42AF59",
                            },

                            ":hover": {
                                borderColor:  "#42AF59",
                                transition: "all 0.4s ease 0s",
                            },


                        }}
                    />
                    <Box
                        component="button"
                        bgcolor="#42AF59"
                        type='submit'
                        sx={{
                            borderRadius: "9rem",
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "1rem",
                            lineHeight: "1.5",
                            padding: "0.375rem 0.75rem",
                            border: "1px solid transparent",
                            cursor: "pointer",
                            display: "inline-block", 
                            whiteSpace: "nowrap",
                            height: "40px",
                            ":hover": {
                                bgcolor: " #2f855a",
                                transition: "all 0.4s ease 0s",
                            },
                            ":focus": {
                                outline: "0",
                                boxShadow: "0 0 0 3px  rgba(66, 175, 89, 0.5)",
                                borderColor: "#42AF59",
                            },
                        }}
                    >
                        Se inscrever
                    </Box>

                </Stack>
            </Stack>
        </Box>
    )
}
