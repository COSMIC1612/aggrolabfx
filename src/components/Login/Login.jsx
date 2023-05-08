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
import { useNavigate } from "react-router-dom";
import { loginSuccess,loginStart,loginFailure } from "../../redux/authSlice";
import { useDispatch,useSelector } from "react-redux";
import Loading from "../Loading/Loading";
const Login = () => {
  const error=useSelector((state)=>state.auth.error);
  const loading=useSelector((state)=>state.auth.loading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(loginFailure(null));
    dispatch(loginStart());
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user={"displayName":userCredential.user.displayName,
                    "email":userCredential.user.email};
        console.log(user);
        dispatch(loginSuccess(user));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginFailure("Invalid email or password. Please try again."));
      });
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
      {!loading ?
      (<Paper style={{}} className={classes.paper}>
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
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" style={btnstyle} fullWidth>
          Sign in
        </Button>
        <Typography style={{ margin: "10px 0px" }}>
          Do you have an account ?
          <Link
            onClick={()=>navigate("/SignUp")}
            style={{
              color: `${colors.greenAccent[500]}`,
              marginLeft: "10px",
              textDecoration: "none",
              cursor:"pointer",
            }}
          >
            Sign Up
          </Link>
        </Typography>
      </Paper>) : <Loading/>
}
    </form>
  );
};

export default Login;
