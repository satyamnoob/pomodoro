import { Box } from "@mui/material";
import { TimerText } from "../styled components/styled";
import React from "react";

interface TimerProps {
  time: {
    hr: number;
    min: number;
    sec: number;
  };
}

export const Timer: React.FC<TimerProps> = ({ time }) => {
  return (
    <Box>
      <TimerText>
        {String(time.hr).padStart(2, "0")}:
        {String(time.min).padStart(2, "0")}:
        {String(time.sec).padStart(2, "0")}
      </TimerText>
    </Box>
  );
};
