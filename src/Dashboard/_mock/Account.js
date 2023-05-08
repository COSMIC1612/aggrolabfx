import { useSelector } from "react-redux";

const Account =()=> {
  const user = useSelector((state)=>state.auth.user);
  const accountInfo={
    displayName: user.displayName,
    email: user.email,
    photoURL: '/assets/images/avatars/avatar_default.jpg',
  };
 return accountInfo;
};

export default Account;
