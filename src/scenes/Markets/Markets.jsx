import React, { useState, useEffect } from "react";
import classes from "./Markets.module.css";
import axios from "axios";
import Plot from "react-plotly.js";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Button, Paper,Grid } from "@mui/material";

const Markets = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [forexData, setForexData] = useState([]);
  const [period,setPeriod] = useState('daily');
  
  useEffect(() => {
    
    const fetchData = async () => {
      const response = await axios.get(
        `https://kson.pythonanywhere.com/api/${period}api/`
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
    };
    fetchData();
  }, [period]);
  console.log(period);

  return (
    <Paper className={classes.container}>
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
          title:`EUR/USD Exchange Rates (${period.toUpperCase()})`,
          xaxis: { color: colors.primary[200] },
          yaxis: { color: colors.primary[200] },
          plot_bgcolor: colors.primary[800],
          paper_bgcolor: colors.primary[800],
        }}
      />
      <Grid container spacing={2}>
      <Grid item xs={3} className={classes.item}>
        <Button
        style={{
          backgroundColor: `${colors.blueAccent[600]}`,
          color: `${colors.grey[100]}`,
          width:"100%",
          height:"100%",
          fontSize:"20px",
        }}
        onClick={()=>setPeriod('daily')}
      >
        intraday
      </Button>
        </Grid>
        <Grid item xs={3} className={classes.item}>
        <Button
        style={{
          backgroundColor: `${colors.blueAccent[600]}`,
          color: `${colors.grey[100]}`,
          width:"100%",
          height:"100%",
          fontSize:"20px",
        }}
        onClick={()=>setPeriod('daily')}
      >
        daily
      </Button>
        </Grid>
        <Grid item xs={3} className={classes.item}>
        <Button
        style={{
          backgroundColor: `${colors.blueAccent[600]}`,
          color: `${colors.grey[100]}`,
          width:"100%",
          height:"100%",
          fontSize:"20px",
        }}
        onClick={()=>setPeriod('weekly')}
      >
        weekly
      </Button>
        </Grid>
        <Grid item xs={3} className={classes.item}>
        <Button
        style={{
          backgroundColor: `${colors.blueAccent[600]}`,
          color: `${colors.grey[100]}`,
          width:"100%",
          height:"100%",
          fontSize:"20px",
        }}
        onClick={()=>setPeriod('monthly')}
      >
        monthly
      </Button>
        </Grid>
      </Grid>
      
      
      
    </Paper>
  );
};

export default Markets;

/*/* import React, { useEffect, useState } from "react";
import classes from "./Markets.module.css";
import Plot from "react-plotly.js";
import axios from "axios";

function Markets() {
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});

  useEffect(() => {
    const alphaApiKey = "ISYQXYDW9F1Y6HBG";
    const symbol = "FX_DAILY";
    const url = `https://www.alphavantage.co/query?function=${symbol}&from_symbol=EUR&to_symbol=USD&apikey=${alphaApiKey}`;

    axios
      .get(url)
      .then((res) => {
        const { "Time Series FX (Daily)": timeSeries } = res.data;
        const stockData = [];

        for (const date in timeSeries) {
          const value = timeSeries[date];
          const time = new Date(date).getTime();

          stockData.push({
            x: [time],
            y: [parseFloat(value["4. close"])],
            open: parseFloat(value["1. open"]),
            high: parseFloat(value["2. high"]),
            low: parseFloat(value["3. low"]),
            close: parseFloat(value["4. close"]),
            type: "scatter",
            mode: "markers",
            marker: {
              color:
                parseFloat(value["4. close"]) > parseFloat(value["1. open"])
                  ? "#26a69a"
                  : "#ef5350",
              size: 6,
            },
          });
        }

        setData([...stockData, {
          x: stockData.map(d => d.x[0]),
          y: stockData.map(d => d.y[0]),
          type: "scatter",
          mode: "lines",
          name: "Trendline",
          line: {
            color: "#4caf50",
            dash: "dot",
          }
        }]);

        setLayout({
          title: "USD/EUR Exchange Rate",
          dragmode: "zoom",
          showlegend: true,
          xaxis: {
            range: [stockData[0].x[0], stockData[stockData.length - 1].x[0]],
            type: "date",
          },
          yaxis: {
            autorange: true,
            type: "linear",
          },
          margin: {
            t: 50,
            b: 50,
            r: 50,
            l: 50,
          },
          hovermode: "closest",
          hoverlabel: {
            bgcolor: "#fff",
            font: { size: 12 },
            bordercolor: "#000",
            align: "left",
            namelength: -1,
          },
          hovertemplate:
            "Open: %{customdata[0]:.2f}<br>" +
            "High: %{customdata[1]:.2f}<br>" +
            "Low: %{customdata[2]:.2f}<br>" +
            "Close: %{customdata[3]:.2f}<br>",
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes.container}>
      <Plot data={data} layout={layout} className={classes.plot} />
    </div>
  );
}

export default Markets; */
