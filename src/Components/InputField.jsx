import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import backgroundImage from "../assets/box_bg.png";
import IconButton from "@mui/material/IconButton";
import AddTaskTwoToneIcon from "@mui/icons-material/AddTaskTwoTone";

const InputField = () => {
  return (
    <div className="flex justify-center items-center h-48">
      <Box
      className="w-64 h-40 relative"
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
         className="absolute left-5 w-56"
          id="outlined-basic"
          label="Enter your task"
          variant="outlined"
          sx={{
            input: { color: "white" }, // Optional: Text color inside the input field
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
          color="primary"
          className="absolute right-2 top-5"
          sx={{
            background: "blue",
            color: "yellow",
            "&:hover": {
              background: "blue", // Ensures background color remains on hover
            },
            "&:focus": {
              background: "blue", // Ensures background color remains on focus
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
