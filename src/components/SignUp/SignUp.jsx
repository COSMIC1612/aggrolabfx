import {
  Avatar,
  Grid,
  Paper,
  useTheme,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link
} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import classes from "./SignUp.module.css";
import { tokens } from "../../theme";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { loginFailure, loginStart, loginSuccess } from "../../redux/authSlice";
import Loading from "../Loading/Loading";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName,setUserName]=useState("");
  const [open, setOpen] = useState(false);
  const error = useSelector((state)=>state.auth.error);
  const loading = useSelector((state)=>state.auth.loading);
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const userNameHandler =(event)=>{
    setUserName(event.target.value);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(loginFailure(null));
    dispatch(loginStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        updateProfile(userCredential.user,{displayName:userName}).then(()=>console.log("account created !!!")).catch((error)=>console.log(error));
        const user = {
          "displayName":userCredential.user.displayName,
          "email":userCredential.user.email,
        }
        dispatch(loginSuccess(user));
        setOpen(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
        
      })
      .catch((error) => {
        console.log(error);
        switch(error.code){
          case "auth/weak-password":
            dispatch(loginFailure("Weak Password!"));
            break;
          case "auth/email-already-in-use":
            dispatch(loginFailure("Email Already Exists!"));
            break;
          default:
              dispatch(loginFailure("Error!!!"));
        }
        
      });
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const avatarStyle = { backgroundColor: `${colors.greenAccent[400]}` };
  const textStyle = { color: `${colors.greenAccent[400]}` };
  const margin = { margin: "10px 0px" };
  const btnstyle = {
    backgroundColor: `${colors.blueAccent[600]}`,
    color: `${colors.grey[100]}`,
    fontSize: "14px",
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <form className={classes["signUp-Grid"]} onSubmit={submitHandler}>
        {!loading ?(
        <Paper className={classes.signUp}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOpenIcon />
            </Avatar>
            <h2 style={textStyle}>Claim your free Account !</h2>
          </Grid>
          <TextField
            value={userName}
            onChange={userNameHandler}
            style={margin}
            color="secondary"
            label="Username"
            placeholder="Enter username"
            type="text"
            fullWidth
            required
          />
          <TextField
            value={email}
            onChange={emailHandler}
            style={margin}
            color="secondary"
            label="Email"
            placeholder="Enter email"
            type="email"
            fullWidth
            required
          />
          <TextField
            value={password}
            onChange={passwordHandler}
            color="secondary"
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <FormControlLabel
            style={margin}
            control={<Checkbox name="checkedB" color="secondary" />}
            label="I accept the terms and conditions."
            required
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" style={btnstyle} fullWidth>
            Create your Account
          </Button>
          <Typography style={{ margin: "10px 0px" }}>
          You have already an account ?
          <Link
            onClick={()=>navigate("/")}
            style={{
              color: `${colors.greenAccent[500]}`,
              marginLeft: "10px",
              textDecoration: "none",
              cursor:"pointer",
            }}
          >
            Sign In
          </Link>
        </Typography>
        </Paper>) :
        <Loading/>}
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Account created successfully!
        </Alert>
      </Snackbar>
    </>
  );
};
export default SignUp;
