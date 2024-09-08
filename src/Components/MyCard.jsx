import React from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
const MyCard = () => {
  return (
    <div className="flex justify-center mx-5 my-5 relative w-60 py-3">
      <Box
      className=" h-20 w-60 absolute bg-orange-300"
        sx={{
          borderRadius: "20px",
          border: "1px solid yellow",
          overflow: "hidden", // Prevents overflowing content
          wordWrap: "break-word",
          padding:"10px"
        }}
      >
        cvALJcvALJcvALJcvALJcvALJcvALJcvALJcvALJcv
        
      </Box>
      <IconButton aria-label="delete" size="large" sx={{
        background:"red",
        color:"white",
        "&:hover": {
              background: "yellow",
              color:"red"
            },
            "&:focus": {
              background: "yellow",
              color:"red"
            },
      }}
      className="absolute top-12 left-28 h-10 w-10">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default MyCard;
