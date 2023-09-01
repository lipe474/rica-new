// @ Material-UI
import { Box, Button, Container, Typography } from "@mui/material";

// @ Types
import { formatDateAndTime } from "@/data/utils";
import { CategoryByArticle } from "@/data/@types/category";

// @ Images
import reacpath from "../../../../public/assets/img/react-group-59.png";
import backgroundImg from "../../../../public/assets/img/geometrica.png";

// @ Services
import {
  getArticleById,
  getArticlesByCategory,
  getRelatedArticles
} from "@/api";

// @ Components
import { Line } from "@/components/Line";
import MediaCard from "@/components/Surfaces/Cards/MediaCard";
import { Categories, Category, RelatedArticles } from "@/data/@types";
import { use } from "react";
import { json } from "stream/consumers";

interface ArticleProps {
  params: {
    id: string;
    category_id: string;
  };
  searchParams: {
    category_id: string;
  };
}

const Article = async ({ params, searchParams }: ArticleProps) => {
  const [article, category, relatedArticles] = await Promise.all([
    getArticleById(params?.id),
    getArticlesByCategory(searchParams?.category_id),
    getRelatedArticles(params?.id)
  ]);

  const userNames = article?.UserArticles.map((item: any) => item.user.name);

  const formattedUserNames =
    userNames?.length >= 2
      ? userNames.slice(0, -1).join(", ") + " e " + userNames.slice(-1)
      : userNames?.[0];

  const adjustContent = (html: string) => {
    const adjustedHtml = html
      .replace(/<img/g, '<img style="max-width:100%; height:auto;"')
      .replace(
        /<iframe.*?youtube\.com\/embed\/([^\s"']+).*?<\/iframe>/g,
        '<div class="video-wrapper"><iframe src="https://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe></div>'
      )
      .replace(/<pre>[\s\S]*?<\/pre>/g, (match) => {
        return `<div class="code-wrapper" style="max-width: 100%; overflow: auto; background: #e2e4e7;">${match}</div>`;
      })
      .replace(/<code>[\s\S]*?<\/code>/g, (match) => {
        return `<code class="code-wrapper" style="max-width: 100%; overflow: auto; background: #e2e4e7;">${match}</code>`;
      });
    return adjustedHtml;
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          backgroundPosition: "center",
          minHeight: "600px"
        }}
      >
        <Container sx={{ margin: "0 auto" }} maxWidth="lg">
          <Box
            flexDirection={"row"}
            marginTop={"60px"}
            alignItems={["center", "center", "center", "flex-start"]}
            justifyContent={["center", "center", "center", "flex-start"]}
          >
            {article?.Categories?.map((item: Category) => {
              return (
                <Button
                  key={item.category_id}
                  variant="outlined"
                  size="large"
                  color="success"
                  sx={{
                    borderRadius: 50,
                    backgroundColor: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#ffffff"
                    },
                    height: {
                      xs: "30px",
                      sm: "40px",
                      md: "40px"
                    },
                    fontWeight: 600,
                    textTransform: "none",
                    marginRight: "10px",
                    marginBottom: {
                      xs: "10px",
                      sm: "0px",
                      md: "0px"
                    }
                  }}
                >
                  {item.category.name}
                </Button>
              );
            })}

            <Box width={"100%"} marginTop={"40px"}>
              <Typography variant={"h5"} fontWeight={600} color="#ffffff">
                {article?.title}
              </Typography>
              <Typography
                marginTop={"30px"}
                sx={{
                  height: "76px",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
                fontWeight={400}
                color="#ffffff"
              >
                {article?.resume}
              </Typography>
            </Box>
            <Box
              display={"flex"}
              gap={3}
              width={"100%"}
              marginTop={"50px"}
              sx={{
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  md: "row"
                }
              }}
            >
              <Typography fontWeight={400} color="#ffffff">
                Escrito por: {""}
                {formattedUserNames}
              </Typography>
              <Typography fontWeight={400} color="#ffffff">
                {formatDateAndTime(article?.published_at)}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container
        sx={{ margin: "0 auto", minHeight: "400px", marginBottom: "20px" }}
        maxWidth="lg"
      >
        <Box
          sx={{
            backgroundImage: `url(${article?.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "flex-end",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            top: {
              xs: "-100px",
              sm: "-213px",
              md: "-213px"
            },
            position: "relative",
            borderRadius: "5px"
          }}
          height={"500px"}
        />

        <Box
          sx={{
            marginTop: {
              xs: "-80px",
              sm: "-190px",
              md: "-190px"
            }
          }}
          contentEditable={false}
          dangerouslySetInnerHTML={{
            __html: adjustContent(article?.rich_text)
          }}
        />
      </Container>
      {relatedArticles?.length > 0 ? (
        <Box minHeight="650px" bgcolor="#0E423F">
          <Container
            sx={{
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              padding: "50px"
            }}
            maxWidth="lg"
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button
                variant="outlined"
                size="large"
                color="success"
                sx={{
                  borderRadius: 50,
                  backgroundColor: "#ffffff",
                  border: "none",
                  "&:hover": {
                    backgroundColor: "#ffffff"
                  },
                  height: "60px",
                  fontWeight: 600
                }}
              >
                {category.name}
              </Button>
            </Box>
            <Box
              display={{
                xs: "block",
                sm: "block",
                md: "flex",
                lg: "flex"
              }}
              gap={{
                xs: "20px",
                sm: "20px",
                md: "30px",
                lg: "50px"
              }}
              justifyContent="center"
            >
              {relatedArticles.map((category: any) =>
                category.articles.map((article: any) => (
                  <MediaCard
                    key={article.article.id}
                    id={article.article.id}
                    title={article.article.title}
                    image={article.article.image}
                    Categories={article.article.Categories}
                  />
                ))
              )}
            </Box>
          </Container>
        </Box>
      ) : (
        <Line color="#0E423F" />
      )}

      <Container sx={{ margin: "0 auto", padding: "50px" }} maxWidth="lg">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h5"
            fontWeight={500}
            fontFamily="'Poppins', sans-serif"
          >
            CONTINUE CONECTADO
          </Typography>
          <Box
            component="img"
            src={reacpath.src}
            alt="react-path"
            maxWidth="500px"
            width="100%"
            height="auto"
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Typography fontWeight={500} fontFamily="'Poppins', sans-serif">
              Tenha as últimas notícias publicadas pela RICA.
              <br />
              Entre com o seu e-mail e faça login para continuar lendo.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Article;
