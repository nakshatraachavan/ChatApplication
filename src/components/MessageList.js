import React from "react";
import { Box } from "@mui/material";

const MessageList = ({ messages}) => {
  return (
    <Box
      sx={{
        height: "400px",
        overflowY: "auto",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        backgroundColor: "#fafafa",
        marginBottom: "10px",
      }}
    >
      {messages.map((message, index) => (
        <Box
          key={index}
          sx={{
            marginBottom: "10px",
            padding: "10px",
            backgroundColor: message.type === "send" ? "#e3f2fd" : "#c8e6c9",
            borderRadius: "10px",
            textAlign: message.type === "send" ? "right" : "left",
            maxWidth: "75%",
            marginLeft: message.type === "send" ? "auto" : "0",
          }}
        >
          {message.msg}
        </Box>
      ))}
    </Box>
  );
};

export default MessageList;
