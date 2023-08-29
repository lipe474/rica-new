"use client";
import * as React from "react";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import prominentImage from "../../../../../public/assets/img/prominent.png";
import { formatData } from "@/data/utils";
import Link from "next/link";
import { CardArticle, Categories } from "@/data/@types/category";

export default function ReviewCard({
  id,
  title,
  resume,
  image,
  published_at,
  Categories
}: CardArticle) {
  return (
    <Box
      width="100%"
      bgcolor="#000000"
      display="flex"
      flexDirection="column"
      borderRadius="10px"
      gap={3}
      sx={{
        cursor: "pointer"
      }}
    >
      <Link
        href={`/article/${id}?category_id=${
          Categories && Categories[0]?.category_id
        }`}
      >
        <Box
          display="flex"
          flexDirection="column"
          p="1.25rem 1.50rem 1rem 1.50rem "
          gap={3}
        >
          <Box
            display="flex"
            gap={3}
            alignItems={"center"}
            fontFamily="'Poppins', sans-serif"
            color="#e2e8f0"
            fontSize={"1rem"}
          >
            <Image src={prominentImage} alt="rica" width={50} height={61} />
            <Box display="flex" gap={2}>
              <Typography
                component="div"
                color="#ADEABA"
                fontFamily="'Poppins', sans-serif"
              >
                {Categories && Categories[0].category.name}
              </Typography>
              <Typography fontFamily="'Poppins', sans-serif">
                {formatData(published_at)}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap={1} color="#e2e8f0">
            <Typography
              fontWeight="600"
              fontFamily="'Poppins', sans-serif"
              fontSize={"1.2em"}
            >
              {title}
            </Typography>
            <Typography
              fontFamily="'Poppins', sans-serif"
              fontSize={"1rem"}
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                m: 0,
                p: 0
              }}
            >
              {resume}
            </Typography>
          </Box>
        </Box>
        <Box
          height={"100%"}
          maxHeight={"500px"}
          component="img"
          src={image}
          alt="rica"
          sx={{
            objectFit: "cover",
            borderRadius: "0px 0px 10px 10px",
            transform: "translateY(4px)",
            width: "100%",
            height: "100%",
            "&:hover": {
              opacity: 0.6,
              transition: "0.3s"
            }
          }}
        />
      </Link>
    </Box>
  );
}
