import React from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
const MyCard = ({task,index,deleteTask}) => {
  return (
    <div className="flex justify-center mx-3 my-3 relative w-60 h-20">
      <Box
      className=" h-16 w-60 absolute text-center"
        sx={{
          background:"#FEFF9C",
          borderRadius: "10px 10px 0 0 ",
          border: "2px solid yellow",
          overflow: "hidden", // Prevents overflowing content
          wordWrap: "break-word",
          padding:"10px"
        }}
      >
       {task}
        
      </Box>
      <IconButton
        onClick={()=>(deleteTask(index))} 
        aria-label="delete" size="large" sx={{
        background:"red",
        color:"white",
        border:"3px solid Yellow",
        "&:hover": {
              background: "yellow",
              color:"red",
              border:"3px solid red",
            },
            "&:focus": {
              background: "yellow",
              color:"red"
            },
      }}
      className="absolute top-10 left-28 h-10 w-10">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default MyCard;
