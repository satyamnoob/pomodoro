import React from "react";
import { IconButton, Grid2 as Grid } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { SpotifyPlayer } from "./SpotifyPlayer";

export const Footer: React.FC = () => {
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <Grid
      container
      height={"20%"}
      alignItems="flex-end"
      justifyContent="space-between"
      sx={{ display: "flex", flexWrap: "nowrap", px: 2 }}
    >
      {/* Spotify Player should not push height */}
      <Grid sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
        <SpotifyPlayer
          playlistUrl="https://open.spotify.com/embed/album/1N1dJyQTyj13KbKuVbgCr9?utm_source=generator"
          width="100%"
          height="80"
        />
      </Grid>

      {/* Fullscreen Button */}
      <Grid display={{xs: 'none', sm: 'none', md: 'block'}} justifySelf={'flex-end'}>
        <IconButton onClick={handleFullscreen} sx={{ color: "white" }}>
          <FullscreenIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
