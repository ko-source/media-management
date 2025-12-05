"use client";

import { Box } from "@mui/material";

interface ContentContainerProps {
  children: React.ReactNode;
}

export default function ContentContainer({ children }: ContentContainerProps) {
  return (
    <Box className="max-w-full sm:max-w-[900px] md:max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col justify-center ">
      {children}
    </Box>
  );
}
