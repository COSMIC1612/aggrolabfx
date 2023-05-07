import { useTheme } from "@emotion/react";
import { Fragment } from "react";
import classes from "./LandingPage.module.css";
import { tokens } from "../../theme";
import Login from "../../components/Login/Login";
const LandingPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Fragment>
    <div className={classes.home}>
      <h1 style={{ color: `${colors.greenAccent[400]}` }}>
        <span>Ready </span>
        <span>to </span>
        <span>take </span>
        <span>your </span>
        <span>Forex </span>
        <span>trading </span>
        <span>to </span>
        <span>the </span>
        <span>next </span>
        <span>level? </span>
      </h1>
    </div>
    <div className={classes.login}>
    <Login/>
    </div>
    </Fragment>
  );
};
export default LandingPage;
