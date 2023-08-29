import React from "react";

import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

import logo from "../../../public/assets/img/LOGORICA.png";
import backgroundImg from "../../../public/assets/img/fundoFooter.png";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "flex-end"
      }}
      marginTop={"80px"}
    >
      <Box
        component={Stack}
        color={"white"}
        marginRight={0}
        minHeight={"30rem"}
        boxShadow={"10px 15px 15px 10px rgba(35, 35, 35, 0.3)"}
        position={"relative"}
        overflow={"hidden"}
        bgcolor={"#ffffff"}
        width={{
          xs: "100%",
          sm: "100%",
          md: "80%"
        }}
        sx={{
          position: "relative",
          top: {
            xs: "-0px",
            sm: "-50px",
            md: "-50px"
          }
        }}
      >
        <Box
          display="flex"
          flexDirection={{
            xs: "column",
            sm: "column",
            md: "row"
          }}
          color="#000000"
          p={3}
          alignItems="center"
          justifyContent="center"
          height={{
            xs: "100%",
            sm: "90%",
            md: "90%"
          }}
          gap={2}
        >
          <Box component="img" width={200} height={200} src={logo.src} />

          <Box
            display="flex"
            flexDirection="column"
            gap={5}
            textAlign="center"
            alignItems="center"
            justifyContent="center"
          >
            <Box width="80%" display="flex" flexDirection="column" gap={2}>
              <Typography
                variant="h5"
                fontWeight={600}
                fontFamily="'Poppins', sans-serif"
              >
                Nossa Missão
              </Typography>
              <Typography
                variant="subtitle1"
                fontFamily="'Poppins', sans-serif"
              >
                A RICA é um projeto criado com a intenção de trazer informações
                de qualidade para a comunidade acadêmica. A RICA é um projeto
                desenvolvido com o Grupo de Pesquisa GITI do IFBA- Campus de
                Vitória da Conquista.
                <br />
                <br />
                Compartilhando nosso conteúdo, você ajuda a RICA a crescer e nos
                dá motivação para continuar fazendo o nosso trabalho
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "70px",
                display: "flex",
                gap: "29px",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  md: "row"
                }
              }}
            >
              <Link href={"/"}>
                <Button size={"small"} variant={"text"}>
                  Sobre Nós
                </Button>
              </Link>
              <Link href={"/"}>
                <Button size={"small"} variant={"text"}>
                  Quem Faz a RICA
                </Button>
              </Link>
              <Link href={"/"}>
                <Button size={"small"} variant={"text"}>
                  Entre em Contato
                </Button>
              </Link>
              <Link href={"/"}>
                <Button size={"small"} variant={"text"}>
                  GITI
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
