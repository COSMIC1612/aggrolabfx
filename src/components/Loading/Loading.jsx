import * as React from 'react';
import classes from "./Loading.module.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () =>{
  return (
    <Box className={classes.container}
    sx={{ display: 'flex' }}>
      <CircularProgress color='secondary'/>
    </Box>
  );
}
export default Loading;