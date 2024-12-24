import React, { useState } from "react";
import { AppBar, Toolbar, Container, Typography, CssBaseline, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./scrollTop";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const Chatbox = (props) => {
  const [messages, setMessages] = useState([{msg:'Hiee Babbyyy',type:'recieve'}]);

  const handleSend = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  const handleNewChat = () => {
    setMessages([{msg:'Hiee Babbyyy',type:'receive'}]);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="sm" sx={{ marginTop: "20px" }}>
        <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Luca
            </Typography>
            <button onClick={handleNewChat}>Clear Chat</button>
          </Toolbar>
        </AppBar>

        <MessageList messages={messages} />
        <MessageInput onSend={handleSend} />

      </Container>

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top" color="primary">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

export default Chatbox;
