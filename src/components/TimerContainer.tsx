import { Grid2 as Grid } from "@mui/material";
import { useState } from "react";
import { TimerButtonsGroup } from "./TimerButtonsGroup";
import { SelectedButton } from "../types";
import { Timer } from "./Timer";
import { TimerFunctionality } from "./TimerFunctionality";
import { useTimer } from "../hooks/useTimer";

export const TimerContainer = () => {
  const { time, startTimer, stopTimer, resetTimer, isRunning } = useTimer(
    0,
    25,
    0
  );

  const [selectedButton, setSelectedButton] = useState<SelectedButton>(
    SelectedButton.First
  );

  return (
    <Grid
      flexDirection={"column"}
      spacing={"20px"}
      container
      height={"60%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid>
        <TimerButtonsGroup
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
      </Grid>
      <Grid>
        <Timer time={time} />
      </Grid>
      <Grid>
        <TimerFunctionality
          startTimer={startTimer}
          stopTimer={stopTimer}
          resetTimer={resetTimer}
          isRunning={isRunning}
        />
      </Grid>
    </Grid>
  );
};
