"use client";

import { Box, Typography } from "@mui/material";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <Box className="mb-8">
      <Typography
        variant="h4"
        className={`font-semibold text-white ${subtitle ? "mb-3" : ""} text-2xl md:text-3xl!`}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          className="text-white/70 text-sm sm:text-base"
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
