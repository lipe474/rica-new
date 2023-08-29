import { getArticle, getCategories } from "@/api";
import CategoriasList from "@/components/Categories";
import { Line } from "@/components/Line";
import ListParticipants from "@/components/Participants";
import ReviewCard from "@/components/Surfaces/Cards/ReviewCard";
import { Article } from "@/data/@types";
import { formatTime } from "@/data/utils";
import { Box, Grid, Typography, Stack, Button, TextField } from "@mui/material";
import Link from "next/link";

export default async function Home() {
  const [article, category] = await Promise.all([
    getArticle(),
    getCategories()
  ]);

  return (
    <Box maxWidth={"1400px"} margin={"0 auto"} p={2} mt={3}>
      {/* {JSON.stringify(data)} */}
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          {article.length > 0 && (
            <ReviewCard
              id={article[0].id}
              title={article[0].title}
              resume={article[0].resume}
              image={article[0].image}
              published_at={article[0].published_at}
              Categories={article[0].Categories}
            />
          )}

          {article.slice(1, -1).map((article: Article) => {
            const { id, title, resume, published_at, Categories } = article;

            return (
              <Box
                key={id}
                display="flex"
                flexDirection="column"
                component="div"
                m="35px 0px"
                gap={2}
              >
                <Line />
                <Typography variant="body1" color="#42AF59">
                  {Categories[0]?.category?.name} {formatTime(published_at)}
                </Typography>
                <Link href={`/article/${id}`}>
                  <Typography variant="h6" fontWeight={600}>
                    {title}
                  </Typography>
                </Link>
                <Typography
                  variant="body1"
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
            );
          })}

          {article.length > 1 && (
            <ReviewCard
              id={article[article.length - 1].id}
              title={article[article.length - 1].title}
              resume={article[article.length - 1].resume}
              image={article[article.length - 1].image}
              published_at={article[article.length - 1].published_at}
              Categories={article[article.length - 1].Categories}
            />
          )}
        </Grid>

        <Grid
          item
          md={4}
          lg={4}
          sx={{
            display: { xs: "none", md: "block" }
          }}
        >
          <Line color="#000000" />
          <Box component="div">
            <Typography
              component="div"
              fontFamily="'Poppins', sans-serif"
              sx={{
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "2",
                background: "transparent",
                verticalAlign: "baseline",
                m: "1rem 0 1rem 0"
              }}
            >
              Assine para receber conteúdos da RICA
            </Typography>
            <Box pb={6} flexDirection={"column"}>
              <Typography mt={2} textAlign={"left"} mb={2} fontSize={".89rem"}>
                Coloque seu e-mail para se manter atualizado
              </Typography>
              <Stack gap={2} flexDirection={"row"}>
                <TextField fullWidth size="small" type={"email"} required />

                <Button
                  variant="contained"
                  size="medium"
                  color="success"
                  type="submit"
                >
                  Assinar
                </Button>
              </Stack>
            </Box>
          </Box>
          <CategoriasList categories={category} />
          <ListParticipants />
        </Grid>
      </Grid>
    </Box>
  );
}
