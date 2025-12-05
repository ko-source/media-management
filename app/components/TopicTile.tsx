"use client";

import { Box, Grow } from "@mui/material";
import { type Topic } from "../data";

interface TopicTileProps {
  topic: Topic;
  isSelected: boolean;
  index: number;
  onClick: () => void;
}

export default function TopicTile({
  topic,
  isSelected,
  index,
  onClick,
}: TopicTileProps) {
  return (
    <Grow in={true} timeout={300 + index * 100}>
      <Box
        onClick={onClick}
        className={`
          cursor-pointer rounded-full py-4 px-8 w-fit text-center inline-block
          transition-all duration-300
          text-sm sm:text-base
          ${
            isSelected
              ? "bg-accent-primary border-2 border-accent-primary font-semibold text-white"
              : "bg-bg-secondary border border-white/12 font-medium text-white"
          }
          hover:-translate-y-0.5 hover:border-accent-primary
          ${
            isSelected
              ? "hover:shadow-[0_4px_12px_rgba(147,51,234,0.4)]"
              : "hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
          }
        `}
      >
        {topic}
      </Box>
    </Grow>
  );
}
