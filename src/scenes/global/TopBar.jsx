import { useState, useContext } from "react";
import classes from "./TopBar.module.css";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useNavigate } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { openDash } from "../../redux/dashboardSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";


const pages = ["About", "Dashboard","Markets", "Blog & News"];
const settings = ["Profile", "Settings", "Logout"];

const TopBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseNews = () => {
    handleCloseNavMenu();
    navigate("/News");
  };
  const handleCloseAbout = () => {
    handleCloseNavMenu();
    navigate("/About");
  };
  const handleCloseMarkets = () => {
    handleCloseNavMenu();
    navigate("/Markets");
  };
  const handleCloseDashboard=()=>{
    handleCloseUserMenu();
    dispatch(openDash());
  }
  const handleLogout = () => {
    handleCloseUserMenu();
    dispatch(logout());
    signOut(auth);
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: `${colors.primary[800]}` }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="./logo512.png" alt="pictured" className={classes.logo} />
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 5,
              fontFamily: "'Goldman', cursive",
              display: { xs: "none", md: "flex" },
              letterSpacing: ".2rem",
              color: `${colors.blueAccent[500]}`,
              textDecoration: "none",
            }}
            className={classes["name-laptop"]}
          >
            AggrolabFX
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key={pages[0]} onClick={handleCloseAbout}>
                <Typography textAlign="center" sx={{ fontWeight: 600 }}>
                  {pages[0]}
                </Typography>
              </MenuItem>
              {isLoggedIn &&( 
                <MenuItem key={pages[1]} onClick={handleCloseDashboard}>
                  <Typography textAlign="center" sx={{ fontWeight: 600 }}>
                    {pages[1]}
                  </Typography>
                </MenuItem> )}
                {isLoggedIn &&( 
                <MenuItem key={pages[2]} onClick={handleCloseMarkets}>
                <Typography textAlign="center" sx={{ fontWeight: 600 }}>
                  {pages[2]}
                </Typography>
              </MenuItem> )}
              
              
              <MenuItem key={pages[3]} onClick={handleCloseNews}>
                <Typography textAlign="center" sx={{ fontWeight: 600 }}>
                  {pages[3]}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h2"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: `${colors.blueAccent[500]}`,
              textDecoration: "none",
            }}
            className={classes["name-mobile"]}
          >
            AggrolabFX
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Button
              key={pages[0]}
              onClick={handleCloseAbout}
              sx={{
                my: 1.5,
                mx: 1.3,
                display: "block",
                fontSize: "21px",
                color: `${colors.grey[100]}`,
              }}
            >
              {pages[0]}
            </Button>
            
            {isLoggedIn && (
              <Button
                key={pages[1]}
                onClick={handleCloseDashboard}
                sx={{
                  my: 1.5,
                  mx: 1.3,
                  display: "block",
                  fontSize: "21px",
                  color: `${colors.grey[100]}`,
                }}
              >
                {pages[1]}
              </Button> )}
              {isLoggedIn && (
              <Button
                key={pages[2]}
                onClick={handleCloseMarkets}
                sx={{
                  my: 1.5,
                  mx: 1.3,
                  display: "block",
                  fontSize: "21px",
                  color: `${colors.grey[100]}`,
                }}
              >
                {pages[2]}
              </Button> )}
            
            <Button
              key={pages[3]}
              onClick={handleCloseNews}
              sx={{
                my: 1.5,
                mx: 1.3,
                display: "block",
                fontSize: "21px",
                color: `${colors.grey[100]}`,
              }}
            >
              {pages[3]}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            {!isLoggedIn ? (
              <Button
                style={{
                  backgroundColor: `${colors.blueAccent[600]}`,
                  color: `${colors.grey[100]}`,
                }}
                className={classes.register}
                onClick={() => {
                  navigate("/SignUp");
                }}
              >
                Register now
              </Button>
            ) : (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="user"
                      src="/assets/images/avatars/avatar_default.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key={settings[0]} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{settings[0]}</Typography>
                  </MenuItem>
                  <MenuItem key={settings[1]} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{settings[1]}</Typography>
                  </MenuItem>
                  <MenuItem key={settings[2]} onClick={handleLogout}>
                    <Typography textAlign="center">{settings[2]}</Typography>
                  </MenuItem>
                </Menu>
              </>
            )}

            <IconButton onClick={colorMode.toggleColorMode} sx={{ mx: 2 }}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopBar;
