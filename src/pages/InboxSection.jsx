import React from 'react';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import ChatItem from '../components/ChatItem';
import { Box, Button } from '@mui/material';

const chatitems = [
  {
    image: './Avatar.png',
    heading: 'Chat-Box',
    para: 'Here is a chat box',
    time: '8:09 pm',
    messages: '',
    active: true,
  },
  {
    image: './Avatar2.png',
    heading: 'Chat-Box',
    para: 'Here is a chat box',
    time: '8:09 pm',
    messages: '3',
    active: false,
  },
  {
    image: './Avatar3.png',
    heading: 'Chat-Box',
    para: 'Here is a chat box',
    time: '8:09 pm',
    messages: '',
    active: true,
  },
  {
    image: './Avatar4.png',
    heading: 'Chat-GPT',
    para: 'Here is a chat box',
    time: '8:09 pm',
    messages: '4',
    active: true,
  },
  {
    image: './Avatar5.png',
    heading: 'Chat-ong',
    para: 'Here is a chat box',
    time: '8:09 pm',
    messages: '1',
    active: false,
  },
  {
    image: './Avatar6.png',
    heading: 'Chat-G',
    para: 'Here is a chat box',
    time: '8:09 pm',
    messages: '2',
    active: true,
  },
];

function InboxSection({ selectedItem, setSelectedItem }) {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        width: '100%',
        sm: { width: '455px' },
        position: 'relative',
        display: Object.keys(selectedItem).length > 0 ? 'none' : 'block',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 6, borderBottom: '2px solid rgba(0,0,0,0.25)' }}>
        <Box sx={{ bgcolor: '#FBBC05', borderRadius: '50%', p: 1 }}>
          <MdKeyboardDoubleArrowLeft size={30} color="blue" />
        </Box>
        <Button variant="contained" sx={{ bgcolor: '#394EE1', px: 3, py: 1, fontSize: '1rem', color: 'white', borderRadius: 'md' }}>Inbox</Button>
      </Box>
      {chatitems.map((item, index) => (
        <ChatItem key={index} selected={selectedItem} setSelected={setSelectedItem} item={item} />
      ))}
    </Box>
  );
}

export default InboxSection;
