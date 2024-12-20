import React, { useState } from "react";
import { TextField, Card, Button, Container, Box, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./chatbox.css";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [data, setData] = useState("");

  const getData = (val) => {
    setData(val.target.value);
  };

  const handleSend = () => {
    if (data.trim()) {
      setMessages([...messages, data.trim()]);
      setData("");
    }
  };

  const handleNewChat = () => {
    setMessages([]); // Clear all messages
  };

  return (
    <div>
      <Container maxWidth="sm" sx={{ marginTop: "20px" }}>
        <Card variant="outlined" sx={{ padding: "10px", borderRadius: "10px", boxShadow: 2 }}>
          <Typography variant="h6" fontWeight="bold" textAlign="center">
            Luca
          </Typography>
          
          <Button
              variant="contained"
              onClick={handleNewChat}
            >
              New Chat
            </Button>
          {/* Messages */}
          <Card
            variant="outlined"
            className="message-box"
            sx={{
              borderRadius: "10px",
              padding: "10px",
              marginBottom: "15px",
              backgroundColor: "#fafafa",
            }}
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                className="message"
                sx={{
                  marginBottom: "10px",
                  padding: "10px",
                  backgroundColor: "#e3f2fd",
                  borderRadius: "10px",
                  textAlign: "right",
                  maxWidth: "75%",
                  marginLeft: "auto",
                }}
              >
                {msg}
              </Box>
            ))}
          </Card>
          <Box display="flex" alignItems="center">
            <TextField
              id="outlined-multiline-flexible"
              multiline
              maxRows={4}
              value={data}
              onChange={getData}
              placeholder="Type your message..."
              variant="outlined"
              fullWidth
              sx={{ marginRight: "10px" }}
            />
            <Button variant="contained" color="primary" endIcon={<SendIcon />} onClick={handleSend}>
              Send
            </Button>
          </Box>
        </Card>
      </Container>
    </div>
  );
};

export default Chatbox;
