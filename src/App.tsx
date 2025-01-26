import { Grid2 as Grid } from "@mui/material";
import "./index.css";
import { Header } from "./components/Header";
import { TimerContainer } from "./components/TimerContainer";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Grid container flexDirection={'column'} justifyContent={'space-between'} px={4} py={6} className="main-container">
      <Header />
      <TimerContainer />
      <Footer />
    </Grid>
  );
}

export default App;
