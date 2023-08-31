import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { Categories } from "@/data/@types/category";

interface MediaCardProps {
  id: string;
  name?: string;
  title: string;
  image: string;
  Categories?: {
    category_id: number;
  }[];
}

export default function MediaCard({
  id,
  image,
  title,
  Categories
}: MediaCardProps) {
  return (
    <Box
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2
      }}
    >
      <Box
        component="img"
        sx={{
          width: "100%",
          height: 350,
          objectFit: "cover",
          borderRadius: "5px"
        }}
        alt={title}
        src={image}
      />
      <Typography
        variant="subtitle1"
        color={"white"}
        textAlign={"center"}
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical"
        }}
      >
        {title}
      </Typography>
      <Link
        href={`/article/${id}?category_id=${
          Categories && Categories[0]?.category_id
        }`}
      >
        <Button
          variant="contained"
          size="large"
          color="success"
          sx={{
            borderRadius: 40,
            backgroundColor: "#42AF59",
            color: "#ffffff",
            border: "none",
            "&:hover": {
              backgroundColor: "#42AF59"
            },
            fontFamily: "Poppins",
            fontSize: "16px",
            width: "200px",
            textTransform: "none"
          }}
        >
          Ler Matéria
        </Button>
      </Link>
    </Box>
  );
}
