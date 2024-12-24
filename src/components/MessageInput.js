import React,{useState} from 'react'
import { TextField, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageInput = ({onSend}) => {
    const [input, setInput] = useState("");

    const handleChange = (e) => setInput(e.target.value);

    const handleSend = () => {
        if (input.trim()) {
        onSend({ msg: input.trim(), type: "send" });
        setInput("");
        }
    };
  return (
    <Box display="flex" alignItems="flex-end" sx={{ flexDirection: "column" }}>
      <TextField
        multiline
        maxRows={4}
        value={input}
        onChange={handleChange}
        placeholder="Type your message..."
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "10px" }}
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<SendIcon />}
        onClick={handleSend}
      >
        Send
      </Button>
    </Box>
  )
}

export default MessageInput
