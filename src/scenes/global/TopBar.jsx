import {useState,useContext} from "react";
import classes from "./TopBar.module.css"; 
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
/* import Avatar from "@mui/material/Avatar"; */
import Button from "@mui/material/Button";
/* import Tooltip from "@mui/material/Tooltip"; */
import MenuItem from "@mui/material/MenuItem";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useNavigate } from "react-router-dom";

import {ColorModeContext, tokens } from "../../theme";
import { useTheme } from '@mui/material/styles';

const pages = ["About", "Markets", "Blog & News"];
/* const settings = ["Profile", "Account", "Dashboard", "Logout"]; */

const TopBar = () => {
const navigate = useNavigate();
const theme = useTheme();
const colors = tokens(theme.palette.mode); 
const colorMode = useContext(ColorModeContext);

  const [anchorElNav, setAnchorElNav] = useState(null);
/*   const [anchorElUser, setAnchorElUser] = useState(null); */

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  /* const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }; */

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

/*   const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }; */

  return (
    <AppBar position="static" style={{backgroundColor:`${colors.primary[800]}`,}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" sx={{fontWeight:700,}} >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h2"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: `${colors.blueAccent[500]}`,
              textDecoration: "none",
            }}
          >
            AggrolabFX
          </Typography>
          <Box sx={{ flexGrow: 1, display:{ xs: "none", md:"flex" },justifyContent:'center'}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 1.5, mx:1.3, display: "block",fontSize:"21px" ,color:`${colors.grey[100]}`}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Button
          style={{backgroundColor:`${colors.blueAccent[600]}`,color:`${colors.grey[100]}`}}
          className={classes.register}
          onClick={()=> {navigate("/SignUp")}}
          >
            Register now
          </Button>

           {/*  <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            {/* <Menu
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
            <IconButton onClick={colorMode.toggleColorMode} sx={{mx:2}}>
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
