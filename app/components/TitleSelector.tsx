"use client";

import { Box, Autocomplete, TextField, Typography, Fade } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { type Topic } from "../data";

interface TitleSelectorProps {
  selectedTopic: Topic | null;
  selectedTitle: string | null;
  availableTitles: string[];
  filteredTitles: string[];
  searchQuery: string;
  onTitleSelect: (title: string | null) => void;
  onSearchChange: (value: string) => void;
}

export default function TitleSelector({
  selectedTopic,
  selectedTitle,
  availableTitles,
  filteredTitles,
  searchQuery,
  onTitleSelect,
  onSearchChange,
}: TitleSelectorProps) {
  if (!selectedTopic) return null;

  return (
    <Fade in={true} timeout={500}>
      <Box className="mb-12! mt-6!">
        <SectionTitle mb={2}>
          Which type of &quot;{selectedTopic}&quot; content do you want to create?
        </SectionTitle>
        <Autocomplete
          options={filteredTitles}
          value={selectedTitle}
          onChange={(_event, newValue) => onTitleSelect(newValue)}
          onInputChange={(_event, newInputValue) => onSearchChange(newInputValue)}
          inputValue={searchQuery}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Select"
              variant="outlined"
              fullWidth
              className="[&_.MuiOutlinedInput-root]:bg-bg-secondary [&_.MuiOutlinedInput-root]:text-white [&_.MuiOutlinedInput-root]:rounded-xl [&_.MuiOutlinedInput-root_.MuiOutlinedInput-notchedOutline]:border-white/12 [&_.MuiOutlinedInput-root:hover_.MuiOutlinedInput-notchedOutline]:border-white/30 [&_.MuiOutlinedInput-root.Mui-focused_.MuiOutlinedInput-notchedOutline]:border-border-default [&_.MuiInputBase-input]:text-white [&_.MuiInputBase-input::placeholder]:text-white/50 [&_.MuiInputBase-input::placeholder]:opacity-100 mt-6! mb-6! md:w-[30%]!"
            />
          )}
          renderOption={(props, option) => {
            const isExactMatch = availableTitles.includes(option);
            const { key, ...otherProps } = props;
            return (
              <Box
                component="li"
                key={key}
                {...otherProps}
                className={`
                  ${
                    isExactMatch
                      ? "bg-bg-secondary text-white"
                      : "bg-accent-light text-white/70"
                  }
                  hover:bg-accent-hover
                `}
              >
                {option}
                {!isExactMatch && (
                  <Typography
                    variant="caption"
                    className="ml-2 text-white/50 italic"
                  >
                    (Custom)
                  </Typography>
                )}
              </Box>
            );
          }}
          freeSolo
          className="[&_.MuiAutocomplete-popupIndicator]:text-white/70"
        />
      </Box>
    </Fade>
  );
}
