import React from "react";
import { Box, Button, IconButton, List, ListItem } from "@mui/material";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import ChatItem from "../components/ChatItem";

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
    <Box sx={{
      bgcolor: 'white',
      width: { xs: '100vw', sm: 500 },
      position: 'relative',
      display: { xs: Object.keys(selectedItem).length > 0 ? 'none' : 'block', sm: 'block' },
      height: '100vh',  // Full height of the viewport
      overflow: 'hidden'  // Prevents scrolling outside the list area
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2,
        borderBottom: 1,
        borderColor: 'grey.300'
      }}>
        <IconButton sx={{ bgcolor: '#FBBC05', p: 1, borderRadius: '50%' }}>
          <MdKeyboardDoubleArrowLeft size={30} color="blue" />
        </IconButton>
        <Button  onClick={() => setSelectedItem({})} sx={{ bgcolor: '#394EE1', px: 3, py: 1, color: 'white', borderRadius: 1, textTransform: 'none' }}>
          Inbox
        </Button>
      </Box>
      <List sx={{
        height: 'calc(100vh - 90px)',  // Assuming AppBar height is 56px
        overflowY: 'auto',  // Enable vertical scrolling
        '::-webkit-scrollbar': {
          display: 'none', // Hides scrollbar for WebKit browsers
        },
        scrollbarWidth: 'none' // Hides scrollbar for Firefox
      }}>
        {chatitems.map((item, index) => 
        {
          return (
            <ListItem key={index} sx={{ p: 0 }}>
            <ChatItem
              selected={selectedItem}
              setSelected={setSelectedItem}
              item={item}
            />
          </ListItem>
          )
        }
        )}
      </List>
    </Box>
  );
}

export default InboxSection;
  