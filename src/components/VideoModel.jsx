import React from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';

function VideoModel() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: 'blue.700', color: 'white', p: 2, sm: { px: 14, py: 4 } }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <IconButton sx={{ bgcolor: '#FBBC05', color: 'blue', '&:hover': { bgcolor: '#fdd835' } }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography variant="h6" component="h5" sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
            Rahul
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Box sx={{ bgcolor: 'gray.200', p: 4, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ position: 'absolute', right: { xs: 16, sm: 40 }, top: { xs: 16, sm: 40 } }}>
            <img src="./Group 41.png" alt="videoCallImage" style={{ width: 'auto', height: 'auto' }} />
          </Box>
          <img
            src="./image 20.png"
            alt="videoCallImage"
            style={{ height: '85vh', objectFit: 'contain' }}
          />
          <Button
            sx={{
              position: 'absolute',
              bottom: 40,
              left: '50%',
              transform: 'translateX(-50%)',
              bgcolor: 'red.600',
              '&:hover': { bgcolor: 'red.700' },
              color: 'white',
              borderRadius: '50%',
              width: 56,
              height: 56
            }}
            aria-label="End Call"
          >
            <CloseIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default VideoModel;
