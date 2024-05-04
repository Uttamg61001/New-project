import React from 'react';
import { Box, IconButton, Typography, Button, Avatar } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CallEndIcon from '@mui/icons-material/CallEnd';

function CallModel() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{
        bgcolor: '#FFD24E',
        color: 'black',
        p: 2,
        sm: { px: 14, py: 4 }
      }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <IconButton sx={{
            bgcolor: 'blue.500',
            color: 'white',
            '&:hover': { bgcolor: 'blue.600' }
          }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
            Rahul
          </Typography>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box sx={{
          bgcolor: 'gray.200',
          p: 4,
          position: 'relative',
          height: '85vh',
          width: 800,
          pt: 14,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          alignItems: 'center'
        }}>
          <Avatar src="./image 20.png" alt="videoCallImage" sx={{ width: 256, height: 256, mb: 2 }} />
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Rahul</Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>Calling</Typography>
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
              height: 56,
              fontSize: '2rem'
            }}
            aria-label="End Call"
          >
            <CallEndIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CallModel;
