import { getArticle } from "@/api";
import { CardHighlights } from "@/components/CardHighlights";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { CardArticle } from "@/data/@types/category";
import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";

const HighlightsPage = async () => {
  const articles = await getArticle();
  return (
    <Box sx={{ marginTop: "20px" }}>
      <Container maxWidth="lg">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link underline="hover" color="inherit" href="/" fontSize=".99rem">
            Home
          </Link>
          <Typography fontSize=".9rem" color="text.primary">
            Destaques
          </Typography>
        </Breadcrumbs>
        <Typography
          letterSpacing={0.5}
          fontSize={{
            xs: "1.5rem",
            sm: "2rem",
            md: "2rem"
          }}
          lineHeight="2.5rem"
          mt={3}
          color="rgba(38, 38,38)"
          fontWeight={650}
          textTransform={"uppercase"}
        >
          Artigos em Destaque
        </Typography>
        <Typography color="#595959" variant="body2" gutterBottom>
          Navegue pelas coleções de artigos em destaque e fique por dentro das
          novidades.
        </Typography>
      </Container>
      <Container maxWidth="lg">
        <Box
          height="100%"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          paddingY="20px"
          gap={4}
        >
          {articles.length > 0 &&
            articles.map((article: CardArticle) => (
              <CardHighlights
                key={article.id}
                id={article.id}
                title={article.title}
                resume={article.resume}
                image={article.image}
                published_at={article.published_at}
                Categories={article.Categories}
              />
            ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HighlightsPage;
