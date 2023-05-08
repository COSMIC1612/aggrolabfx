import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom'; 

function ProtectedRoute({children}) {
   const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
   console.log(isLoggedIn)
   const navigate=useNavigate();
   useEffect(()=>{
   if(!isLoggedIn){
    navigate("/Login");
   }
   
}
,[isLoggedIn,navigate])
return children;
}
export default ProtectedRoute;
