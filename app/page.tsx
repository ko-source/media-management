"use client";

import { useState, useMemo } from "react";
import { Divider } from "@mui/material";
import { topicsData, type Topic } from "./data";
import PageContainer from "./components/PageContainer";
import ContentContainer from "./components/ContentContainer";
import Header from "./components/Header";
import SectionHeader from "./components/SectionHeader";
import TopicSelector from "./components/TopicSelector";
import TitleSelector from "./components/TitleSelector";
import WordCountSlider from "./components/WordCountSlider";
import NavigationButtons from "./components/NavigationButtons";

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [wordCount, setWordCount] = useState<number>(700);

  const availableTitles = useMemo(() => {
    if (!selectedTopic) return [];
    return topicsData[selectedTopic].titles;
  }, [selectedTopic]);

  const filteredTitles = useMemo(() => {
    if (!searchQuery.trim()) return availableTitles;
    const query = searchQuery.toLowerCase();
    const matchingTitles = availableTitles.filter((title) =>
      title.toLowerCase().includes(query)
    );
    const isCustomTitle =
      searchQuery.trim() &&
      !availableTitles.some((title) => title.toLowerCase() === query);
    return isCustomTitle ? [...matchingTitles, searchQuery.trim()] : matchingTitles;
  }, [availableTitles, searchQuery]);

  const handleTopicSelect = (topic: Topic) => {
    setSelectedTopic(topic);
    setSelectedTitle(null);
    setSearchQuery("");
  };

  const handleTitleSelect = (title: string | null) => {
    setSelectedTitle(title);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleWordCountChange = (_event: Event, newValue: number | number[]) => {
    setWordCount(newValue as number);
  };

  const handleNext = () => {
    if (selectedTopic && selectedTitle) {
      console.log("Form Data:", {
        topic: selectedTopic,
        title: selectedTitle,
        wordCount: wordCount,
      });
      // Here you would typically send the data to your backend
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <PageContainer>
      <Header onBackClick={handleBack} />
      <ContentContainer>
        <SectionHeader
          title="Content type"
          subtitle="Choose a content type that best fits your needs."
        />
        <Divider className="border-white/12 mb-8" />

        <TopicSelector
          selectedTopic={selectedTopic}
          onTopicSelect={handleTopicSelect}
        />

        <TitleSelector
          selectedTopic={selectedTopic}
          selectedTitle={selectedTitle}
          availableTitles={availableTitles}
          filteredTitles={filteredTitles}
          searchQuery={searchQuery}
          onTitleSelect={handleTitleSelect}
          onSearchChange={handleSearchChange}
        />

        <WordCountSlider value={wordCount} onChange={handleWordCountChange} />

        <NavigationButtons
          onBack={handleBack}
          onNext={handleNext}
          nextDisabled={!selectedTopic || !selectedTitle}
        />
      </ContentContainer>
    </PageContainer>
  );
}
