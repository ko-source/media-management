"use client";

import { Box, Slider, Fade } from "@mui/material";
import SectionTitle from "./SectionTitle";

interface WordCountSliderProps {
  value: number;
  onChange: (event: Event, newValue: number | number[]) => void;
  min?: number;
  max?: number;
  step?: number;
}

export default function WordCountSlider({
  value,
  onChange,
  min = 100,
  max = 1000,
  step = 50,
}: WordCountSliderProps) {
  return (
    <Fade in={true} timeout={700}>
      <Box className="mb-12">
        <SectionTitle>Set the number of words for output text.</SectionTitle>
        <Box className="px-2 sm:px-4 relative">
          <Slider
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            step={step}
            marks={[
              { value: min, label: String(min) },
              { value: max, label: String(max) },
            ]}
            valueLabelDisplay="on"
            valueLabelFormat={(val) => String(val)}
            className=" md:w-[20%]!
              [&_.MuiSlider-thumb]:bg-accent-primary
              [&_.MuiSlider-thumb]:border-2
              [&_.MuiSlider-thumb]:border-white
              [&_.MuiSlider-thumb]:w-5
              [&_.MuiSlider-thumb]:h-5
              [&_.MuiSlider-track]:bg-accent-primary
              [&_.MuiSlider-track]:h-1
              [&_.MuiSlider-rail]:bg-bg-tertiary
              [&_.MuiSlider-rail]:h-1
              [&_.MuiSlider-valueLabel]:bg-accent-primary
              [&_.MuiSlider-valueLabel]:text-white
              [&_.MuiSlider-valueLabel]:rounded-md
              [&_.MuiSlider-valueLabel]:px-2
              [&_.MuiSlider-valueLabel]:py-1
              [&_.MuiSlider-valueLabel_before]:hidden
              [&_.MuiSlider-markLabel]:text-white
              [&_.MuiSlider-markLabel]:text-sm
            "
          />
        </Box>
      </Box>
    </Fade>
  );
}
