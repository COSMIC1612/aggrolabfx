import { useSelector } from "react-redux";
const Home = ()=> {
    const user = useSelector((state)=>state.auth.user)
    console.log(user)
    let userName ="";
    if(user){
        userName=user.displayName;
    }
    return (<div>welcome to AggrolabFX {userName} !</div>);
}
export default Home;