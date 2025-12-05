"use client";

import { Box } from "@mui/material";
import { allTopics, type Topic } from "../data";
import TopicTile from "./TopicTile";
import SectionTitle from "./SectionTitle";

interface TopicSelectorProps {
  selectedTopic: Topic | null;
  onTopicSelect: (topic: Topic) => void;
}

export default function TopicSelector({
  selectedTopic,
  onTopicSelect,
}: TopicSelectorProps) {
  return (
    <Box className="mb-12 mt-6">
      <SectionTitle>What type of content are you creating?</SectionTitle>
      <div className="flex flex-wrap gap-4 flex-start mt-6">

      <Box className="flex flex-wrap gap-4 justify-center">
        {allTopics.map((topic, index) => (
          <TopicTile
            key={topic}
            topic={topic}
            isSelected={selectedTopic === topic}
            index={index}
            onClick={() => onTopicSelect(topic)}
          />
        ))}
      </Box>
      </div>
    </Box>
  );
}
