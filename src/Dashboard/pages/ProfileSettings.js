import {useState} from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Account from "../_mock/Account";
import { Button, TextField } from "@mui/material";
import { auth } from "../../firebase";
import { updateProfile ,updateEmail,reauthenticateWithCredential,EmailAuthProvider,sendPasswordResetEmail} from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";





const ProfileSettings = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [expanded, setExpanded] =useState(false);
  const [updateUsernameClicked,setUpdateUsernameClicked]=useState(false);
  const [newUsername,setNewUsername]=useState("");
  const [newEmail,setNewEmail]=useState("");
  const [userProvidedPassword,setUserProvidedPassword]=useState("");




  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleUpdateUsernameBtnClicked =()=>{
    setUpdateUsernameClicked(!updateUsernameClicked);
  }
  const handleNewUsernameInput =(event)=>{
    setNewUsername(event.target.value)
  }
  const handleProvidedPassword =(event)=>{
    setUserProvidedPassword(event.target.value);
  }
  const handleNewEmailInput =(event)=>{
    setNewEmail(event.target.value)
  }
  const handleSubmitNewEmail =()=>{
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      userProvidedPassword
  )
    reauthenticateWithCredential(auth.currentUser, credential).then(() => {
      console.log("User re-authenticated.");
      updateEmail(auth.currentUser, newEmail).then(() => {
        console.log("email updated")
        dispatch(loginSuccess(auth.currentUser));
        navigate("/dashboard");
      }).catch((error) => {
        alert(error.message);
        setNewEmail("");
        
      })
    }).catch((error) => {
      alert(error.message);
      setUserProvidedPassword("");
      setNewEmail("");
      
    });
    
  }
  const handleUpdatePassword =()=>{
    sendPasswordResetEmail(auth, auth.currentUser.email)
  .then(() => {
    alert("Password reset email sent!");
    navigate("/dashboard");
    
  })
  .catch((error) => {
    alert(error.message);
    
    
  });
  }
  const handleSubmitNewUsername=()=>{
    console.log(newUsername)
    updateProfile(auth.currentUser, {
      displayName: newUsername,photoURL:""
    }).then(() => {
      console.log("username updated")
      dispatch(loginSuccess(auth.currentUser));
      navigate("/dashboard");
    }).catch((error) => {
      console.log("username not updated successfully")
      console.log(error.message)
    });
  }
  
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Username</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {Account().displayName}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="outlined" color="secondary" onClick={handleUpdateUsernameBtnClicked}>Click here to change your username</Button>
          {updateUsernameClicked && (<>
            <hr/>
          <TextField
            color="secondary"
            value={newUsername}
            onChange={handleNewUsernameInput}
            label="New username"
            type="text"
            placeholder="Enter new username"
            style={{"marginRight":"10px",}}
            required
          />
          {!newUsername && (<Button  variant="contained" color="secondary" disabled>Save</Button>)}
          {newUsername && (<Button  variant="contained" color="secondary" onClick={handleSubmitNewUsername} >Save</Button>)}
          </>)}
          
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Email</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {Account().email}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Button variant="outlined" color="secondary" onClick={handleUpdateUsernameBtnClicked}>Click here to change your email</Button>
          {updateUsernameClicked && (<>
            <hr/>
          <TextField
            color="secondary"
            value={newEmail}
            onChange={handleNewEmailInput}
            label="New email"
            type="email"
            placeholder="Enter new email"
            style={{"marginRight":"10px",}}
            required
          />
          <hr/>
          <TextField
            color="secondary"
            value={userProvidedPassword}
            onChange={handleProvidedPassword}
            label="Enter password to confirm"
            type="password"
            placeholder="Enter password"
            style={{"marginRight":"10px",}}
            required
          />
          {!newEmail && (<Button  variant="contained" color="secondary" disabled>Save</Button>)}
          {newEmail && (<Button  variant="contained" color="secondary" onClick={handleSubmitNewEmail} >Save</Button>)}
          </>)}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Password
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            *********************
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Button variant="outlined" color="secondary" onClick={handleUpdatePassword}>Click here to change your password</Button>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
};

export default ProfileSettings;
