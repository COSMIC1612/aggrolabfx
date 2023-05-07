import TopBar from "./scenes/global/TopBar";
import classes from "./App.module.css";
import Box from "@mui/material/Box";
import LandingPage from "./scenes/LandingPage/LandingPage";
import { ColorModeContext, useMode } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import News from "./scenes/News/News";
import Markets from "./scenes/Markets/Markets";
import About from "./scenes/About/About";
import Home from "./scenes/Home/Home";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className={classes.backImg}>
          <div className="app">
            <main className="content">
              <TopBar />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/About" element={<About />} />
                <Route path="/Markets" element={<Markets/>} />
                <Route path="/News" element={<News/>} />
              </Routes>
            </main>
          </div>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
