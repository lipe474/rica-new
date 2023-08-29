import { CardArticle } from "@/data/@types/category";
import { formatDateAndTime } from "@/data/utils";
import { Box, Typography } from "@mui/material";

export const CardHighlights = ({
  Categories,
  image,
  published_at,
  resume,
  title
}: CardArticle) => {
  return (
    <Box
      marginTop="2"
      display={{
        xs: "block",
        sm: "block",
        md: "flex"
      }}
      alignItems="flex-start"
      justifyContent="flex-start"
      width="100%"
      gap="2rem"
    >
      <Box
        component="div"
        display="block"
        maxWidth="450px"
        width="100%"
        height="246px"
        borderRadius="4px"
      >
        <Box
          component="img"
          src={image}
          alt="newsletters"
          width="100%"
          height="100%"
          sx={{
            objectFit: "cover"
          }}
          borderRadius="4px"
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap="1rem"
        width="100%"
        height="100%"
      >
        <Box
          display={{
            xs: "inline-grid",
            sm: "flex",
            md: "flex"
          }}
          gap={{
            xs: "0px",
            sm: "1rem",
            md: "1rem"
          }}
        >
          <Typography variant="overline" color="success.dark" fontWeight={600}>
            {Categories.map((item, index) => {
              return index === Categories.length - 1
                ? item.category.name
                : item.category.name + " | ";
            })}
          </Typography>

          <Typography variant="overline" textTransform="none">
            {formatDateAndTime(published_at)}
          </Typography>
        </Box>
        <Typography color="#1a202c" fontWeight={700} variant="h5">
          {title}
        </Typography>
        <Typography
          color="#718096"
          fontWeight={500}
          fontSize=".875rem"
          lineHeight="1.375rem"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 7,
            WebkitBoxOrient: "vertical"
          }}
        >
          {resume}
        </Typography>
      </Box>
    </Box>
  );
};

const card = {
  id: "fafd3b68-59be-4ac9-85f7-f7b5ef6bc28c",
  title: "Variação genética comum explica pessoas com Covid-19 assintomática",
  resume:
    "Nos últimos três anos, a Covid-19 atingiu milhões de pessoas, causando inúmeras mortes ao redor do globo. Além de mortal, uma característica dessa doença, é que ela se manifesta de diferentes maneiras. Enquanto alguns infectados apresentam sintomas como febre, dor de garganta, tosse, falta de ar, perda de olfato ou paladar, outros permanecem assintomáticos.",
  pdf: '<p><span style="color: rgb(51, 51, 51); font-family: opensans, helvetica, arial, sans-serif; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: -0.5px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Apesar de não adoecer, esse grupo ainda pode<span>&nbsp;</span></span><a class="" href="https://revistagalileu.globo.com/saude/noticia/2023/06/cientistas-desenvolvem-vacinas-para-erradicar-novas-cepas-da-poliomielite.ghtml" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-variant-alternates: inherit; font-weight: 700; font-stretch: inherit; font-size: 20px; line-height: inherit; font-family: opensans, helvetica, arial, sans-serif; font-optical-sizing: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; vertical-align: initial; text-decoration: none; color: rgb(43, 129, 145); letter-spacing: -0.5px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255);">transmitir a doença</a><span style="color: rgb(51, 51, 51); font-family: opensans, helvetica, arial, sans-serif; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: -0.5px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">. Entretanto, como são<span>&nbsp;</span></span><a class="" href="https://revistagalileu.globo.com/Ciencia/Saude/noticia/2021/06/variantes-alfa-e-beta-geram-menos-casos-assintomaticos-indica-estudo.html" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-variant-alternates: inherit; font-weight: 700; font-stretch: inherit; font-size: 20px; line-height: inherit; font-family: opensans, helvetica, arial, sans-serif; font-optical-sizing: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; vertical-align: initial; text-decoration: none; color: rgb(43, 129, 145); letter-spacing: -0.5px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255);">assintomáticos</a><span style="color: rgb(51, 51, 51); font-family: opensans, helvetica, arial, sans-serif; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: -0.5px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">, não sabem que estão contaminados até realizarem algum exame. A grande questão é: por que essas pessoas não apresentam sintomas? A resposta, de acordo com um novo estudo publicado nesta quarta-feira (19) na revista<span>&nbsp;</span></span><a class="" href="https://www.nature.com/articles/s41586-023-06331-x" target="_blank" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-variant-alternates: inherit; font-weight: 700; font-stretch: inherit; font-size: 20px; line-height: inherit; font-family: opensans, helvetica, arial, sans-serif; font-optical-sizing: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; vertical-align: initial; text-decoration: none; color: rgb(43, 129, 145); letter-spacing: -0.5px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255);"><em style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: italic; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; font-optical-sizing: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; vertical-align: initial;">Nature</em></a><span style="color: rgb(51, 51, 51); font-family: opensans, helvetica, arial, sans-serif; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: -0.5px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">, pode ser genética.<br><br>Apesar de não adoecer, esse grupo ainda pode&nbsp;transmitir a doença. Entretanto, como são&nbsp;assintomáticos, não sabem que estão contaminados até realizarem algum exame. A grande questão é: por que essas pessoas não apresentam sintomas? A resposta, de acordo com um novo estudo publicado nesta quarta-feira (19) na revista&nbsp;Nature, pode ser genética.</span></p><p><span style="color: rgb(51, 51, 51); font-family: opensans, helvetica, arial, sans-serif; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: -0.5px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><br></span></p><p><span style="color: rgb(51, 51, 51); font-family: opensans, helvetica, arial, sans-serif; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: -0.5px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">    Os resultados indicam que o segredo está relacionado a uma variação nos genes antígenos leucocitários humanos (HLA), ou marcadores de proteínas que sinalizam o&nbsp;sistema imunológico. “Compreender o impacto da variação do HLA na doença promete fornecer informações significativas que são relevantes para entender a imunopatogênese da Covid-19, ao mesmo tempo em que informa o desenvolvimento de vacinas e potenciais imunoterapias”, afirmam os pesquisadores no estudo liderado por cientistas da Universidade da Califórnia em São Francisco (UCSF), nos Estados Unidos.  Variação genética  Os genes HLA codificam proteínas usadas pelo sistema ime para identificar suas&nbsp;células saudáveis&nbsp;​​e distingui-las daquelas infectadas por bactérias e vírus. Na nova análise, a equipe de cientistas viu que uma&nbsp;mutação&nbsp;em um dos genes que codificam o HLA parece ajudar as células T — responsáveis por matar o vírus — a identificar o SarsCoV-2 e lançar um ataque antes que ele pudesse gerar sintomas.</span><br></p>',
  doc: null,
  latex: null,
  image: "https://i.ibb.co/71D6Dzh/20230630-cpub-zhejianglab-mainimage-1.png",
  published_at: "2023-07-20T00:26:19.506Z",
  Categories: [
    {
      category_id: 5,
      category: {
        name: "Ciências Exatas e da Terra"
      }
    }
  ],
  UserArticles: [
    {
      user_id: 1,
      user_type: "author",
      user: {
        name: "Nicole Esther Lorena Porto"
      }
    }
  ]
};
