import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import backgroundImage from "../assets/input_bg.png";
import IconButton from "@mui/material/IconButton";
import AddTaskTwoToneIcon from "@mui/icons-material/AddTaskTwoTone";

const InputField = ({addTask}) => {
  const [task,setTask] = useState("")
  const handleChange =(e)=>{
    setTask(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(task)
    setTask("")
  }
  return (
    <div className="flex justify-center items-center h-48">
      <Box
      className="w-64 h-28 relative"
        sx={{
          backgroundImage: `url(${backgroundImage})`, // Semi-transparent background
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid grey",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <TextField
        value={task}
        onChange={handleChange}
         className="absolute left-5 w-56 text-center"
           id="outlined-size-small"
          label="Enter your task"
          variant="outlined"
          size="small"
          sx={{
            input: { color: "black" , background:"#FEFF9C"}, // Optional: Text color inside the input field
            "& .MuiInputLabel-root": {
              color: "Black", // Default label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "Black", // Label color when focused
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black", // Optional: Border color of input field
              },
              "&:hover fieldset": {
                borderColor: "black", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "black", // Border color when focused
              },
            },
          }}
        />
        <IconButton
        onClick={handleSubmit}
          color="primary"
          className="absolute right-2 top-5"
          sx={{
            background: "green",
            border:"3px solid yellow",
            color: "yellow",
            "&:hover": {
              background: "yellow", 
              border:"3px solid green",
              color:"green"
            },
            "&:focus": {
                background: "yellow", 
                border:"3px solid green",
                color:"green" 
            },
          }}
        >
          <AddTaskTwoToneIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default InputField;
