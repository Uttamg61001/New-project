import React from "react";
import { Avatar, Box, Typography, Badge } from "@mui/material";

function ChatItem({ item, selected, setSelected }) {
  return (
    <Box
      sx={{
        display: "flex",
        px: 2,
        py: 3,
        bgcolor: selected === item ? "#394EE1" : "white",
        color: selected === item ? "white" : "black",
        "&:hover": {
          bgcolor: "#c6ccff",
          color: "black",
        },
        cursor: "pointer",
        width: "100%",
      }}
      onClick={() => setSelected(item)}
    >
      <Box sx={{ position: "relative", mr: 2 }}>
        <Avatar
          src={item.image || "./Avatar.png"}
          alt="ImageItem"
          sx={{ width: 50, height: 50 }}
        />
        {item.active && (
          <Box
            sx={{
              bgcolor: "#78E378", // Make sure your theme has a green.400 color
              width: 12, // Tailwind's w-3 is 0.75rem, which is 12px by default
              height: 12, // Tailwind's h-3 is 0.75rem, which is 12px by default
              display: "flex",
              borderRadius: "50%",
              position: "absolute",
              right: 4, // Tailwind's right-1 is 0.25rem, which is 4px by default
              bottom: 0,
            }}
          />
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ fontSize: { xs: "1rem" } }}
        >
          {item.heading || "Unknown"}
        </Typography>
        <Typography variant="body2">{item.para || ""}</Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2">{item.time || "00:00"}</Typography>
        {item.messages && (
          <Box
            sx={{
              bgcolor: "#78E378", // Adjust color according to your theme or preferences
              color: "white",
              width: 20, // Tailwind's w-5 is 1.25rem, which is 20px by default
              height: 20, // Tailwind's h-5 is 1.25rem, which is 20px by default
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              fontSize: "0.875rem", // Tailwind's text-base size, adjust as needed
            }}
          >
            {item.messages}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ChatItem;
