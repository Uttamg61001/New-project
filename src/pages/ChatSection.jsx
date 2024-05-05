import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, Badge } from '@mui/material';

function ChatSection({ selectedItem, setSelectedItem }) {
  const [inputMsgValue, setInputMsgValue] = useState('');
  const [displayedMessage, setDisplayedMessage] = useState('');

  const handleMessageChange = (e) => {
    setInputMsgValue(e.target.value);
  };

  const handleMessageSend = () => {
    setDisplayedMessage(inputMsgValue);
    setInputMsgValue('');
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#F5EAC9' }}>
      <AppBar position="static" sx={{ bgcolor: 'primary.main', paddingX: "4px", paddingY: "4px" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setSelectedItem({})}>
            <ArrowBackIcon />
          </IconButton>
          <Avatar src={selectedItem.image || "./Avatar.png"} sx={{ ml: 2 }} />
          <Box sx={{ flexGrow: 1, ml: 2 }}>
            <Typography variant="h6">{selectedItem.heading || "Unknown"}</Typography>
            {selectedItem.active && <Typography variant="caption">Online</Typography>}
          </Box>
          <IconButton color="inherit"><CallIcon /></IconButton>
          <IconButton color="inherit"><VideoCallIcon /></IconButton>
          <IconButton color="inherit"><MoreVertIcon /></IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ position: 'fixed', bottom: 0, width: '100%', p: 2, boxSizing: 'border-box' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'background.paper', borderRadius: '20px', p: 1 }}>
          {displayedMessage && (
            <Box sx={{ alignSelf: 'flex-end', bgcolor: 'primary.main', color: 'common.white', p: 1, borderRadius: '10px', my: 1 }}>
              {displayedMessage}
              <Typography variant="caption" sx={{ display: 'block', textAlign: 'right' }}>8:09 ✓✓</Typography>
            </Box>
          )}

          <Box sx={{ alignSelf: 'flex-start', bgcolor: 'common.white', p: 1, borderRadius: '10px', my: 1 }}>
            Hii how are you
            <Typography variant="caption" sx={{ display: 'block', textAlign: 'right' }}>8:09 ✓✓</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'background.paper', borderRadius: '20px', px: 2 }}>
          <EmojiEmotionsIcon />
          <TextField
            fullWidth
            variant="standard"
            placeholder="Message"
            value={inputMsgValue}
            onChange={handleMessageChange}
            sx={{ mx: 2 }}
          />
          <IconButton onClick={handleMessageSend}>
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ChatSection;
