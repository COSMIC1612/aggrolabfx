import { Avatar, Grid, Paper, useTheme, TextField,FormControlLabel,Checkbox,Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import classes from "./SignUp.module.css";
import { tokens } from "../../theme";
const SignUp = () => {
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
    <Grid className={classes["signUp-Grid"]}>
      <Paper className={classes.signUp}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={textStyle}>Claim your free Account !</h2>
        </Grid>
        <TextField
          color="secondary"
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
        style={margin}
          color="secondary"
          label="Email"
          placeholder="Enter email"
          type="Email"
          fullWidth
          required
        />
        <TextField
          color="secondary"
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <TextField
        style={margin}
          color="secondary"
          label="Confirm Password"
          placeholder="Confirm Password"
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
    </Grid>
  );
};
export default SignUp;
