import React from 'react'
import classes from './Login.module.css';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
const Login=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const avatarStyle={backgroundColor:`${colors.greenAccent[500]}`}
    const btnstyle={margin:'20px 0',backgroundColor:`${colors.blueAccent[600]}`}
    return(
        <Grid className={classes["grid-container"]}>
            <Paper style={{padding:"20px",height:"60vh", borderRadius:"5%"}}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign in now and explore your trading options !</h2>
                </Grid>
                <TextField color="secondary" label='Username' placeholder='Enter username' fullWidth required/>
                <TextField color="secondary" style={{margin:"20px 0px"}} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="secondary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" style={{color:`${colors.greenAccent[500]}`,textDecoration:"none"}}>
                        Forgot password ?
                </Link>
                </Typography>
                <Typography style={{margin:"10px 0px"}}> 
                    Do you have an account ?
                     <Link href="#" style={{color:`${colors.greenAccent[500]}`,marginLeft:"10px",textDecoration:"none"}}>
                    Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login