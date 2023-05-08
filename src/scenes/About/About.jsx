import { useTheme } from "@emotion/react";
import classes from "./About.module.css";
import { tokens } from "../../theme";
const About =()=>{
  const theme=useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div style={{backgroundColor:`${colors.primary[500]}`}} className={classes["about-section"]}>
    <div  style={{backgroundColor:`${colors.grey[900]}`}} className={classes["inner-container"]}>
      <h1 style={{color:`${colors.blueAccent[500]}`,}} >About Us</h1>
      <p className={classes["text"]}>
      Welcome to our innovative forex website AggrolabFX, where the world of currency exchange comes alive! We are your trusted destination for comprehensive market data and real-time exchange rates. Our cutting-edge platform offers you a unique opportunity to explore various options, including put/call, empowering you to make informed decisions with ease. Step into our dashboard, where the future of forex simulation awaits. Immerse yourself in a virtual world of trading, where you can experiment and refine your strategies using our advanced put/call simulations. As pioneers of machine learning, we proudly showcase powerful models like linear regression, providing you with valuable insights to navigate the dynamic landscape of the forex market. Discover the boundless potential that lies within our platform and embark on a thrilling journey to financial success. Join us today and unlock the power of knowledge, innovation, and limitless possibilities.
      </p>
    </div>
  </div>);
}
export default About;

