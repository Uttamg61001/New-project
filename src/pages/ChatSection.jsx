import React, { useState } from 'react';
import {
  Avatar,
  Box,
  IconButton,
  TextField,
  Typography,
  Badge,
  Stack
} from '@mui/material';
import {
  MdInsertEmoticon,
  MdSend,
  MdCall,
  MdVideocam,
  MdMoreVert
} from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';

function ChatSection({ selectedItem, setSelectedItem }) {
  const [inputMsgValue, setInputMsgValue] = useState('');
  const [displayedMessage, setDisplayedMessage] = useState('');

  const handleMessageChange = (event) => {
    setInputMsgValue(event.target.value);
  };

  const handleMessageSend = () => {
    setDisplayedMessage(inputMsgValue);
    setInputMsgValue('');
  };

  return (
    <Box sx={{ bgcolor: '#F5EAC9', width: '100%', display: (Object.keys(selectedItem).length > 0 ? 'block' : 'none') }}>
      <Box sx={{ bgcolor: 'blue.700', color: 'white', px: 4, py: 4 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="start">
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton sx={{ display: { sm: 'none' } }} onClick={() => setSelectedItem({})}>
              <IoIosArrowBack size={22} />
            </IconButton>
            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={selectedItem.active ? <Box sx={{ width: 12, height: 12, bgcolor: 'green.500', borderRadius: '50%' }} /> : null}>
              <Avatar src={selectedItem.image || "./Avatar.png"} sx={{ width: 50, height: 50 }} />
            </Badge>
            <Box>
              <Typography variant="h6" fontWeight="bold">{selectedItem.heading || "Unknown"}</Typography>
              {selectedItem.active && <Typography variant="body2">online</Typography>}
            </Box>
          </Stack>
          <Stack direction="row" spacing={{ xs: 4, sm: 6 }}>
            <IconButton><MdCall /></IconButton>
            <IconButton><MdVideocam /></IconButton>
            <IconButton><MdMoreVert /></IconButton>
          </Stack>
        </Stack>
      </Box>

      <Box sx={{ position: 'fixed', bottom: 16, width: '100%', px: 3 }}>
        <Stack spacing={2}>
          <Typography align="center" bgcolor="background.paper" opacity={0.5} borderRadius={2} p={1}>Today</Typography>
          {displayedMessage && (
            <Stack direction="row" justifyContent="end">
              <Box sx={{ bgcolor: 'blue.600', p: 2, borderRadius: 1, color: 'common.white' }}>
                {displayedMessage}
                <Typography sx={{ mt: 1, fontSize: '0.75rem', textAlign: 'right' }}>&#10003; 8:09</Typography>
              </Box>
            </Stack>
          )}
          <Stack direction="row" justifyContent="start">
            <Box sx={{ bgcolor: 'common.white', p: 2, borderRadius: 1 }}>
              Hii how are you
              <Typography sx={{ mt: 1, fontSize: '0.75rem', textAlign: 'right' }}>&#10003; 8:09</Typography>
            </Box>
          </Stack>
          <TextField
            variant="outlined"
            fullWidth
            sx={{ bgcolor: 'common.white', borderRadius: '50px', p: 1 }}
            placeholder="Message"
            InputProps={{
              startAdornment: <MdInsertEmoticon />,
              endAdornment: (
                <IconButton onClick={handleMessageSend}>
                  <MdSend />
                </IconButton>
              )
            }}
            value={inputMsgValue}
            onChange={handleMessageChange}
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default ChatSection;
