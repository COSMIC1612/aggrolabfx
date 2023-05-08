/* import { useSelector } from "react-redux"; */
/* const user = useSelector((state)=>state.auth.user)
    console.log(user) */
/*  let userName ="";
    if(user){
        userName=user.displayName;
    } */
import { useEffect } from "react";
import classes from "./Home.module.css";
const Home = () => {
    useEffect(() => {
        const container = document.querySelector(`.${classes.container}`);
        const leftSide = document.querySelector(`.${classes.left}`);
        const rightSide = document.querySelector(`.${classes.right}`);
    
        const handleMouseEnterLeft = () => {
          container.classList.add(classes["hover-left"]);
        };
    
        const handleMouseLeaveLeft = () => {
          container.classList.remove(classes["hover-left"]);
        };
    
        const handleMouseEnterRight = () => {
          container.classList.add(classes["hover-right"]);
        };
    
        const handleMouseLeaveRight = () => {
          container.classList.remove(classes["hover-right"]);
        };
    
        leftSide.addEventListener("mouseenter", handleMouseEnterLeft);
        leftSide.addEventListener("mouseleave", handleMouseLeaveLeft);
        rightSide.addEventListener("mouseenter", handleMouseEnterRight);
        rightSide.addEventListener("mouseleave", handleMouseLeaveRight);
    
        return () => {
          leftSide.removeEventListener("mouseenter", handleMouseEnterLeft);
          leftSide.removeEventListener("mouseleave", handleMouseLeaveLeft);
          rightSide.removeEventListener("mouseenter", handleMouseEnterRight);
          rightSide.removeEventListener("mouseleave", handleMouseLeaveRight);
        };
      }, []);
  return (

    <div className={classes.container}>
      <div 
    className={`${classes.split} ${classes.left}`}
      >
        <h1>Markets</h1>
        <a href="/Markets" className={classes.btn}>
          Click Here
        </a>
      </div>
      <div  
      className={`${classes.split} ${classes.right}`} 
      >
        <h1>Dashboard</h1>
        <a href="/dashboard/app" className={classes.btn}>
          Click Here
        </a>
      </div>
    </div>
  );
};
export default Home;
