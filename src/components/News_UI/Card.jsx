import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import axios from "axios";
import Loading from "../Loading/Loading";

function GoodNews() {
  const [news, setNews] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gnews.io/api/v4/search?q=forex&lang=en&country=us&max=10&token=d77afccab07ce22905b10cf9c621c192"
        );
        setLoading(false);
        const data = response.data;
        setNews(data.articles.slice(0, 8));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "100px",
        margin: "20px ",
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        news.map((article) => (
          <Card
            sx={{ maxWidth: "350px", borderRadius: "20px" }}
            key={article.url}
          >
            <CardMedia
              sx={{ height: 140, borderRadius: "20px 20px 0 0" }}
              image={article.image}
              title={article.title}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: `${colors.blueAccent[500]}` }}
              >
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {article.description}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button href={article.url} target="_blank" size="small">
                <h2
                  style={{
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    color: `${colors.greenAccent[500]}`,
                  }}
                >
                  Read More
                </h2>
              </Button>
            </CardActions>
          </Card>
        ))
      )}
    </div>
  );
}

export default GoodNews;
