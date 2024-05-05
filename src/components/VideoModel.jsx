import React from 'react';
import { Box, IconButton, Typography, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';

function VideoModel() {
  return (
    <Box sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Box sx={{
        bgcolor: 'blue.700',
        color: 'common.white',
        p: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <IconButton sx={{
          bgcolor: '#FBBC05',
          color: 'blue',
          '&:hover': { bgcolor: '#fdd835' }
        }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
          Rahul
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 48px)', // Adjust based on header height
        bgcolor: 'grey.200'
      }}>
        <Box sx={{
          position: 'relative',
          maxWidth: '100%',
          height: '85vh',
          p: 4
        }}>
          {/* Optional top-right small image, typically used for displaying the user's own camera in a video call */}
          <Box sx={{
            position: 'absolute',
            right: { xs: 16, sm: 40 },
            top: { xs: 16, sm: 40 },
            width: 100, // Adjust according to the size requirements
            height: 100
          }}>
            <img src="./Group 41.png" alt="Small video feed" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
          <img
            src="./image 20.png"
            alt="Video call image"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
          <Button
            sx={{
              position: 'absolute',
              bottom: 40,
              left: '50%',
              transform: 'translateX(-50%)',
              bgcolor: 'red.600',
              '&:hover': { bgcolor: 'red.700' },
              color: 'common.white',
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
