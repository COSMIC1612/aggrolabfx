import React, { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import Loading from "../Loading/Loading";

const PopupButton = (props) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [strike, setStrike] = useState(0);
  const [premium, setPremium] = useState(0);
  const [type, setType] = useState("");
  const mode = props.mode;
  const [responseData, setResponseData] = useState(null);
  const [submitClicked,setSubmitclicked]=useState(false);
  const handleSubmitClicked = ()=>{
    setSubmitclicked(true);
  }

  console.log();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDate("");
    setSubmitclicked(false);
    setResponseData(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const url =
          "https://backendpcd.azurewebsites.net/api/predict/?fbclid=IwAR2OMJFSyehn2a11um4DqZmARKJG9xU0jKqvgm84Y7NDI5cKquaphO9ln64";
        let requestBody;
        if (mode === "predictfx") {
          requestBody = {
            date: date,
            strike: 1.09,
            premium: 0.001,
            type: "call",
            mode: mode,
          };
        } else {
          requestBody = {
            date: date,
            strike: strike,
            premium: premium,
            type: type,
            mode: mode,
          };
        }

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (response.ok) {
          const data = await response.json();
          setResponseData(data);
        } else {
          console.log(
            "Request was not successful. Status code:",
            response.status
          );
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
    console.log(responseData);
  };
  return (
    <div style={{ margin: "5px" }}>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleClickOpen}
      >
        {props.text}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Please fill this form</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              style={{ margin: "5px 0px" }}
              color="secondary"
              label="Enter the Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
            {mode !== "predictfx" && (
              <>
                <TextField
                  style={{ margin: "5px 0px" }}
                  color="secondary"
                  label="Enter the strike"
                  type="number"
                  value={strike}
                  onChange={(e) => setStrike(e.target.value)}
                  fullWidth
                  required
                />
                <TextField
                  style={{ margin: "5px 0px" }}
                  color="secondary"
                  label="Enter Premium"
                  type="number"
                  value={premium}
                  onChange={(e) => setPremium(e.target.value)}
                  fullWidth
                  required
                />
                <FormControl
                  fullWidth
                  style={{ margin: "7px 0px" }}
                  color="secondary"
                  variant="outlined"
                >
                  <InputLabel id="dropdown-label">choose a type</InputLabel>
                  <Select
                    color="secondary"
                    labelId="dropdown-label"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    fullWidth
                    required
                  >
                    <MenuItem value="put">Put</MenuItem>
                    <MenuItem value="call">Call</MenuItem>
                  </Select>
                </FormControl>
              </>
            )}

            <Button variant="contained" color="secondary" type="submit" onClick={handleSubmitClicked}>
              Submit
            </Button>
          </form>
          {submitClicked && !responseData && (<Loading/>)}
          {submitClicked && responseData && mode ==="predictfx" && (<p>EUR/USD Exchange Rate Prediction: {responseData.prediction}</p>)}
          {submitClicked && responseData && mode !=="predictfx" && (<p>{responseData.message}</p>)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
          {/* Add any other action buttons here */}
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default PopupButton;
