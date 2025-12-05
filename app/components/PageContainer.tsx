"use client";

import { Box } from "@mui/material";

interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <Box className="min-h-screen bg-bg-secondary text-white">
      {children}
    </Box>
  );
}
