"use client";

import { Typography } from "@mui/material";

interface SectionTitleProps {
  children: React.ReactNode;
  mb?: number;
}

export default function SectionTitle({ children, mb = 3 }: SectionTitleProps) {
  const marginBottomClass = {
    1: "mb-2",
    2: "mb-4",
    3: "mb-6",
    4: "mb-8",
    5: "mb-10",
    6: "mb-12",
  }[mb] || "mb-6";

  return (
    <Typography
      variant="h6"
      className={`font-semibold text-white ${marginBottomClass} text-base sm:text-lg`}
    >
      {children}
    </Typography>
  );
}
