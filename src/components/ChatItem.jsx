import React from 'react';
import { Avatar, Box, Typography, Badge } from '@mui/material';

function ChatItem({ item, selected, setSelected }) {
  return (
    <Box
      sx={{
        display: 'flex',
        px: 4,
        py: 4,
        bgcolor: selected === item ? 'blue.600' : 'white',
        color: selected === item ? 'white' : 'black',
        '&:hover': {
          bgcolor: 'blue.100',
          color: 'black'
        },
        cursor: 'pointer'
      }}
      onClick={() => setSelected(item)}
    >
      <Box sx={{ position: 'relative', mr: 4 }}>
        <Avatar src={item.image || "./Avatar.png"} alt="ImageItem" sx={{ width: 50, height: 50 }} />
        {item.active && (
          <Badge
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            color="success"
            sx={{ '.MuiBadge-dot': { width: 12, height: 12, borderRadius: '50%', border: '2px solid white' } }}
          />
        )}
      </Box>

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Typography variant="subtitle1" fontWeight="bold">{item.heading || "Unknown"}</Typography>
        <Typography variant="body2">{item.para || ""}</Typography>
      </Box>

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'end', justifyContent: 'space-between' }}>
        <Typography variant="body2">{item.time || "00:00"}</Typography>
        {item.messages && (
          <Badge badgeContent={item.messages} color="success" sx={{ '.MuiBadge-badge': { bgcolor: 'green.500', color: 'common.white', fontSize: '0.75rem' } }}>
            {/* Placeholder for message count */}
          </Badge>
        )}
      </Box>
    </Box>
  );
}

export default ChatItem;
