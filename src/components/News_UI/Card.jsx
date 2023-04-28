import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function GoodNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://gnews.io/api/v4/search?q=forex&lang=en&country=us&max=10&token=2b2b072f52f77bb1ec7b064a95639f6b"
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles.slice(0, 3)));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "100px",
        marginTop: "150px",
        marginLeft: "150px",
      }}
    >
      {news.map((article) => (
        <Card sx={{ maxWidth: 345, borderRadius: "20px" }} key={article.url}>
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
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.description}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              marginTop: "auto",
              marginLeft: "auto",
              marginRight: "16px",
              textAlign: "right",
            }}
          >
            <Button href={article.url} target="_blank" size="small">
              <h2
                style={{ alignItems: "flex-end", justifyContent: "flex-end" }}
              >
                Read More
              </h2>
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default GoodNews;
