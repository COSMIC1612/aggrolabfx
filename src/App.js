import TopBar from "./scenes/global/TopBar";
import classes from "./App.module.css";
import Box from "@mui/material/Box";
import Home from "./scenes/Home/Home";
import { ColorModeContext, useMode } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import {Routes,Route} from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
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
              <Route path="/" element={<Home />} />
              <Route path="/SignUp" element={<SignUp/>} />
              </Routes>
            </main>
          </div>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
