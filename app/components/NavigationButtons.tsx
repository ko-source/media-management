"use client";

import { Box, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface NavigationButtonsProps {
  onBack?: () => void;
  onNext?: () => void;
  nextDisabled?: boolean;
  backLabel?: string;
  nextLabel?: string;
}

export default function NavigationButtons({
  onBack,
  onNext,
  nextDisabled = false,
  backLabel = "Back",
  nextLabel = "Next",
}: NavigationButtonsProps) {
  const isNextEnabled = !nextDisabled;

  return (
    <Box className="flex justify-between mt-12 gap-4 flex-col md:flex-row">
      <Button
        variant="outlined"
        onClick={onBack}
        className="
          cursor-pointer rounded-full! py-4! px-8! text-center! inline-block!
          transition-all duration-300! text-sm sm:text-base! bg-bg-secondary! border! border-white/12! font-medium! text-white! hover:-translate-y-0.5! hover:border-accent-primary! w-full! md:w-fit!"
      >
        {backLabel}
      </Button>
      <Button
        variant="contained"
        onClick={onNext}
        disabled={nextDisabled}
        endIcon={
          <Box className="flex gap-1">
            <ChevronRightIcon />
            <ChevronRightIcon />
          </Box>
        }
        className={`
           cursor-pointer rounded-full! py-4! px-8! md:w-fit! w-full! text-center!
          transition-all duration-300!  flex-nowrap! items-center! justify-center! text-sm sm:text-base! border! border-white/12! font-medium! hover:-translate-y-0.5! hover:border-accent-primary!
          ${
            isNextEnabled
              ? "bg-accent-primary text-white hover:bg-accent-primary/90"
              : "bg-white/90! text-gray-500!"
          }
          
        `}
      >
        {nextLabel}
      </Button>
    </Box>
  );
}
