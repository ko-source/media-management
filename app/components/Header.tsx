"use client";

import { Box, Typography, IconButton, Avatar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showEditIcon?: boolean;
  userName?: string;
  userInitials?: string;
  onBackClick?: () => void;
  onProfileChange?: () => void;
}

export default function Header({
  title = "Media management",
  subtitle = "Draft campaign",
  showEditIcon = true,
  userName = "Jane Cooper",
  userInitials = "JC",
  onBackClick,
  onProfileChange,
}: HeaderProps) {
  return (
    <Box className="flex justify-between items-start mb-8 bg-bg-primary p-8">
      <Box className="flex items-center gap-4">
        <IconButton
          onClick={onBackClick}
          className="bg-bg-secondary! rounded-md! text-white border border-white/12 hover:bg-bg-tertiary"
        >
          <ArrowBackIcon />
        </IconButton>
        <Box className="flex flex-col ">
          <Box className="flex items-center gap-2">
            <Typography variant="h5" className="font-semibold text-white">
              {title}
            </Typography>
            {showEditIcon && (
              <EditIcon className="text-[18px] text-white" />
            )}
          </Box>
          <Typography variant="body2" className="text-white">
            {subtitle}
          </Typography>
        </Box>
      </Box>
      <Box className="flex items-center gap-4 ">
        <Box className="text-right md:block hidden">
          <Typography variant="body2" className="text-white! font-medium">
            {userName}
          </Typography>
          <Typography
            variant="caption"
            onClick={onProfileChange}
            className="text-accent-primary cursor-pointer hover:opacity-80"
          >
            Change profile
          </Typography>
        </Box>
        <Avatar className="w-10 h-10 bg-accent-primary">
          {userInitials}
        </Avatar>
      </Box>
    </Box>
  );
}
