import TopBar from "./scenes/global/TopBar";
import Box from "@mui/material/Box";
import Home from "./scenes/Home/Home"; 
import { ColorModeContext,useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
function App() {
  const [theme , colorMode]= useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + './assets/coverImage_1.jpg'})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height: '100vh',
        backgroundPosition: 'center',
        '@media (maxWidth: 768px)': {
          backgroundSize: 'contain',
          backgroundPosition: 'top',
        },
      }}
    >
        <div className="app">
          <main className="content">
            <TopBar/>
            <Home/>
          </main>
        </div>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
