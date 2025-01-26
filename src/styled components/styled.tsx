import { styled, Box, Typography, Grid2 as Grid } from "@mui/material";
import { ButtonProps } from "../types";

export const HeaderGrid = styled(Grid)(() => ({
  width: "fit-content",
  flexDirection: "column",
  height: "20%",
}));

export const HeaderGridItem = styled(Grid)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

export const Title = styled(Typography)({
  fontFamily: '"Pacifico", serif',
  fontSize: "2rem",
  color: "white",
  width: "100%",
});

export const Author = styled(Typography)({
  fontFamily: '"Pacifico", serif',
  fontSize: "0.8rem",
  color: "white",
  fontWeight: "normal",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
});

export const AuthorName = styled("span")({
  fontFamily: '"Open Sans", serif',
  fontSize: "1rem",
  color: "white",
  fontWeight: "normal",
  textTransform: "uppercase",
});

export const StyledButton = styled(Box)<ButtonProps>(
  ({ selectedButton, buttonType, theme }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 14px",
    fontSize: "18px",
    borderRadius: "20px",
    border: "2px solid white",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
    minWidth: "80px",
    color: selectedButton === buttonType ? "black" : "white",
    backgroundColor: selectedButton === buttonType ? "white" : "transparent",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    fontFamily: '"Space Grotesk", serif',

    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      padding: "6px 12px",
      minWidth: "70px",
      borderRadius: "20px",
    },
  })
);

export const StartButton = styled("button")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 20px",
  borderRadius: "25px",
  border: "2px solid white",
  cursor: "pointer",
  fontSize: "1.1rem",
  fontWeight: "bold",
  transition: "all 0.3s ease",
  backgroundColor: "white",
  color: "black",
  fontFamily: '"Space Grotesk", serif',
  "&:hover": {
    backgroundColor: "transparent",
    color: "white",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
    padding: "8px 16px",
    borderRadius: "20px",
  },
}));

export const TimerText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Michroma", serif',
  fontSize: "4rem",
  color: "white",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
}));
