import React from "react";
import { Snackbar, Alert } from "@mui/material";

const MessageBox = ({ open, duration, onClose, type, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={duration} onClose={onClose}>
      <Alert
        onClose={onClose}
        severity={type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MessageBox;
