import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import classes from "./Login.module.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => console.log(userCredential))
      .catch((error) => console.log(error));
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const avatarStyle = { backgroundColor: `${colors.greenAccent[400]}` };
  const btnstyle = {
    margin: "20px 0",
    backgroundColor: `${colors.blueAccent[600]}`,
    color: `${colors.grey[100]}`,
    fontSize: "14px",
  };
  return (
    <form className={classes["grid-container"]} onSubmit={submitHandler}>
      <Paper style={{}} className={classes.paper}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={{ color: `${colors.greenAccent[400]}` }} className={classes["login-text"]}>
            Sign in now and explore your trading options !
          </h2>
        </Grid>
        <TextField
          color="secondary"
          label="Email"
          placeholder="Enter email"
          type="email"
          value={email}
          onChange={emailHandler}
          fullWidth
          required
        />
        <TextField
          color="secondary"
          style={{ margin: "20px 0px" }}
          label="Password"
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={passwordHandler}
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="secondary" />}
          label="Remember me"
        />
        <Button type="submit" variant="contained" style={btnstyle} fullWidth>
          Sign in
        </Button>
        <Typography>
          <Link
            href="#"
            style={{
              color: `${colors.greenAccent[500]}`,
              textDecoration: "none",
            }}
          >
            Forgot password ?
          </Link>
        </Typography>
        <Typography style={{ margin: "10px 0px" }}>
          Do you have an account ?
          <Link
            href="#"
            style={{
              color: `${colors.greenAccent[500]}`,
              marginLeft: "10px",
              textDecoration: "none",
            }}
          >
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </form>
  );
};

export default Login;
