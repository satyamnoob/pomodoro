import { Box } from "@mui/material";
import { StartButton } from "../styled components/styled";
import ReplayIcon from "@mui/icons-material/Replay";
import SettingsIcon from "@mui/icons-material/Settings";

interface TimerFunctionalityProps {
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  isRunning: boolean;
}

export const TimerFunctionality: React.FC<TimerFunctionalityProps> = ({
  startTimer,
  stopTimer,
  resetTimer,
  isRunning,
}) => {
  const functionalityIconsSx = {
    fontSize: "2.5rem",
    color: "white",
  };

  return (
    <Box
      display={"flex"}
      gap={"15px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <StartButton
        onClick={() => {
          if (isRunning) {
            stopTimer();
          } else {
            startTimer();
          }
        }}
      >
        start
      </StartButton>
      <ReplayIcon onClick={resetTimer} sx={functionalityIconsSx} />
      <SettingsIcon sx={functionalityIconsSx} />
    </Box>
  );
};
