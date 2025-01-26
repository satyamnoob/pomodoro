import { Grid2 as Grid } from "@mui/material";
import { StyledButton } from "../styled components/styled";
import { SelectedButton } from "../types";

interface TimerButtonsGroupProps {
  selectedButton: SelectedButton;
  setSelectedButton: React.Dispatch<React.SetStateAction<SelectedButton>>;
}

export const TimerButtonsGroup: React.FC<TimerButtonsGroupProps> = ({
  selectedButton,
  setSelectedButton,
}) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid
        sx={{
          width: { xs: "100%", sm: "auto" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <StyledButton
          selectedButton={selectedButton}
          buttonType={SelectedButton.First}
          onClick={() => setSelectedButton(SelectedButton.First)}
        >
          pomodoro
        </StyledButton>
      </Grid>
      <Grid
        sx={{
          width: { xs: "100%", sm: "auto" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <StyledButton
          selectedButton={selectedButton}
          buttonType={SelectedButton.Second}
          onClick={() => setSelectedButton(SelectedButton.Second)}
        >
          short break
        </StyledButton>
      </Grid>
      <Grid
        sx={{
          width: { xs: "100%", sm: "auto" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <StyledButton
          selectedButton={selectedButton}
          buttonType={SelectedButton.Third}
          onClick={() => setSelectedButton(SelectedButton.Third)}
        >
          long break
        </StyledButton>
      </Grid>
    </Grid>
  );
};
