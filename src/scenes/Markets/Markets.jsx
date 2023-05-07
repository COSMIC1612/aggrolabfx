import React, { useState, useEffect } from "react";
import classes from "./Markets.module.css";
import axios from "axios";
import Plot from "react-plotly.js";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Button, Paper, Grid } from "@mui/material";
import Loading from "../../components/Loading/Loading";

const Markets = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [forexData, setForexData] = useState([]);
  const [period, setPeriod] = useState("daily");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://backendpcd.azurewebsites.net/api/${period}api/`
        );
        const data = response.data;
        const forexDataArray = data.map((item) => ({
          date: new Date(item["timestamp"]),
          open: parseFloat(item["open_price"]),
          high: parseFloat(item["high_price"]),
          low: parseFloat(item["low_price"]),
          close: parseFloat(item["close_price"]),
        }));
        setForexData(forexDataArray.reverse());
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [period, loading]);

  return (
    <>
    <Paper className={classes.container}>
      {loading ? (
        <Loading />
      ) : (
        <Plot
          className={classes.plot}
          data={[
            {
              x: forexData.map((data) => data.date),
              open: forexData.map((data) => data.open),
              high: forexData.map((data) => data.high),
              low: forexData.map((data) => data.low),
              close: forexData.map((data) => data.close),
              type: "candlestick",
              increasing: { line: { color: "#00CC94" } },
              decreasing: { line: { color: "#F50057" } },
              name: "Forex Data",
              hovertemplate:
                "<b>%{x}</b><br><br>" +
                "Open: %{open}<br>" +
                "High: %{high}<br>" +
                "Low: %{low}<br>" +
                "Close: %{close}<br>",
            },
          ]}
          layout={{
            title: `EUR/USD Exchange Rates (${period.toUpperCase()})`,
            xaxis: { color: colors.primary[200] },
            yaxis: { color: colors.primary[200] },
            plot_bgcolor: colors.primary[800],
            paper_bgcolor: colors.primary[800],
          }}
        />
      )}
      <Grid container spacing={2} className={classes["container-btn"]}>
        <Grid item xs={4} className={classes.item}>
          <Button
            style={{
              backgroundColor: `${colors.blueAccent[600]}`,
              color: `${colors.grey[100]}`,
              width: "100%",
              height: "100%",
              fontSize: "20px",
            }}
            onClick={() => {
              setPeriod("daily");
              setLoading(true);
            }}
          >
            daily
          </Button>
        </Grid>
        <Grid item xs={4} className={classes.item}>
          <Button
            style={{
              backgroundColor: `${colors.blueAccent[600]}`,
              color: `${colors.grey[100]}`,
              width: "100%",
              height: "100%",
              fontSize: "20px",
            }}
            onClick={() => {
              setPeriod("weekly");
              setLoading(true);
            }}
          >
            weekly
          </Button>
        </Grid>
        <Grid item xs={4} className={classes.item}>
          <Button
            style={{
              backgroundColor: `${colors.blueAccent[600]}`,
              color: `${colors.grey[100]}`,
              width: "100%",
              height: "100%",
              fontSize: "20px",
            }}
            onClick={() => {
              setPeriod("monthly");
              setLoading(true);
            }}
          >
            monthly
          </Button>
        </Grid>
      </Grid>
      <iframe title="options-widget" className={classes["widget-options"]}  src="//widget2.sentryd.com/widget/#/60942CE2-AFF9-7CE0-11FD-573E47334CE3" ></iframe>
    </Paper>
    
    </>
  );
};

export default Markets;