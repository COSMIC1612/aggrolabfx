import { Avatar, Grid, Paper, useTheme, TextField,FormControlLabel,Checkbox,Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import classes from "./SignUp.module.css";
import { tokens } from "../../theme";
import  React,{ useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase";
const SignUp = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const emailHandler=(event)=>{
        setEmail(event.target.value);
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value);
    }
    const submitHandler =(event)=>{
      event.preventDefault();
      createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>console.log(userCredential)).catch((error)=>console.log(error));
    }
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const avatarStyle ={backgroundColor:`${colors.greenAccent[400]}`};
  const textStyle ={color:`${colors.greenAccent[400]}`};
  const margin={margin:"10px 0px"};
  const btnstyle = {
    backgroundColor: `${colors.blueAccent[600]}`,
    color: `${colors.grey[100]}`,
    fontSize: "14px",
  };
  return (
    <form className={classes["signUp-Grid"]} onSubmit={submitHandler}>
      <Paper className={classes.signUp}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={textStyle}>Claim your free Account !</h2>
        </Grid>
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
        />
        <Button type="submit" variant="contained" style={btnstyle} fullWidth>
          Create your Account
        </Button>
      </Paper>
    </form>
  );
};
export default SignUp;
