import { getArticlesByCategory } from "@/api";
import { CardHighlights } from "@/components/CardHighlights";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ArticleByCardArticle, CardArticle } from "@/data/@types/category";
import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";


interface ArticleProps {
    params: {
        id: string;
    };
}

const ArticlesByCategory = async ({ params }: ArticleProps) => {
    const category = await getArticlesByCategory(params.id, 10);

    return (
        <Box sx={{ marginTop: "20px" }}>
            <Container maxWidth="lg" >
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                        fontSize=".99rem"
                    >
                        Home
                    </Link>
                    <Typography
                        fontSize=".9rem"
                        color="text.primary"
                    >
                        Destaques
                    </Typography>
                </Breadcrumbs>
                <Typography
                    letterSpacing={0.5}
                    fontSize='2rem'
                    lineHeight='2.5rem'
                    mt={3}
                    color="rgba(38, 38,38)"
                    fontWeight={650}
                    textTransform={"uppercase"}
                >
                    Artigos em Destaque
                </Typography>
                <Typography
                    color="#595959"
                    variant="body2"
                    gutterBottom
                >
                    Navegue pelas coleções de artigos em destaque e fique por dentro das novidades.
                </Typography>
            </Container>
            <Container maxWidth="lg"  >
                <Box
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    paddingY="20px"
                    gap={4}
                >
                    {category && (
                        category?.articles.map((item: ArticleByCardArticle) => (
                            <CardHighlights
                                key={item.article.id}
                                id={item.article.id}
                                title={item.article.title}
                                resume={item.article.resume}
                                image={item.article.image}
                                published_at={item.article.published_at}
                                Categories={item.article.Categories}
                            />
                        ))
                    )}

                </Box>
            </Container>
        </Box>
    );
}

export default ArticlesByCategory;
