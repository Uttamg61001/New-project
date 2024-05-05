import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  TextField,
  Avatar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";

function ChatSection({ selectedItem, setSelectedItem }) {
  const [inputMsgValue, setInputMsgValue] = useState("");
  const [messages, setMessages] = useState([]);
  const messageEndRef = useRef(null);

  const handleMessageChange = (e) => {
    setInputMsgValue(e.target.value);
  };

  const handleMessageSend = () => {
    if (inputMsgValue.trim()) {
      // Avoid sending empty messages
      setMessages([
        ...messages,
        { text: inputMsgValue, timestamp: new Date() },
      ]);
      setInputMsgValue("");
    }
  };

  // Automatically scroll to the newest message
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        bgcolor: "#F5EAC9",
        width: "100%",
        height: "100vh",
        display: {
          xs: Object.keys(selectedItem).length > 0 ? "block" : "none",
          sm: "block",
        },
      }}
    >
      <AppBar
        position="static"
        sx={{ bgcolor: "#394EE1", paddingX: "4px", paddingY: "4px" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setSelectedItem({})}
          >
            <ArrowBackIcon />
          </IconButton>
          <Avatar src={selectedItem.image || "./Avatar.png"} sx={{ ml: 2 }} />
          <Box sx={{ flexGrow: 1, ml: 2 }}>
            <Typography variant="h6">
              {selectedItem.heading || "Unknown"}
            </Typography>
            {selectedItem.active && (
              <Typography variant="caption">Online</Typography>
            )}
          </Box>
          <IconButton color="inherit">
            <CallIcon />
          </IconButton>
          <IconButton color="inherit">
            <VideoCallIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        className="MessageContainer"
        sx={{
          flex: 1,
          overflowY: "auto",
          flexDirection: "column",
          display: "flex",
          p: 1,
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              alignSelf: "flex-end",
              bgcolor: "#394EE1",
              color: "white",
              p: 1,
              borderRadius: "10px",
              my: 1,
            }}
          >
            {message.text}
            <Typography
              variant="caption"
              sx={{ display: "block", textAlign: "right" }}
            >
              {message.timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              ✓✓
            </Typography>
          </Box>
        ))}
        <div ref={messageEndRef} />
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          p: 2,
          boxSizing: "border-box",
          bgcolor: "background.paper",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <EmojiEmotionsIcon sx={{ mr: 2 }} />
          <TextField
            fullWidth
            variant="outlined" // Changed from 'standard' to 'outlined' for better visual clarity
            placeholder="Message"
            value={inputMsgValue}
            onChange={handleMessageChange}
            sx={{ flexGrow: 1 }} // Ensure TextField expands appropriately
          />
          <IconButton onClick={handleMessageSend} sx={{ ml: 2 }}>
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ChatSection;
