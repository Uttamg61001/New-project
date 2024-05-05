import React, { useState } from 'react';
import ChatSection from './pages/ChatSection';
import InboxSection from './pages/InboxSection';
import VideoModel from './components/VideoModel';
import CallModel from './components/CallModel';
import { Box } from '@mui/material';

function App() {
  const [selected, setSelected] = useState({});

  return (
    <Box sx={{
      minHeight: '100vh', // Ensures the minimum height of the viewport
      display: 'flex', // Uses flexbox layout
      width: '100vw', // Full width
    }}>
      <InboxSection selectedItem={selected} setSelectedItem={setSelected} />
      <ChatSection selectedItem={selected} setSelectedItem={setSelected} />
      {/* <VideoModel /> */}
      {/* <CallModel /> */}
    </Box>
  );
}

export default App;
