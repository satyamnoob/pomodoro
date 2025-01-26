import React from "react";
import { Grid2 as Grid } from "@mui/material";

interface SpotifyPlayerProps {
  playlistUrl: string;
  width?: string;
  height?: string;
}

export const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({
  playlistUrl,
  width = "30%",
  height = "100",
}) => {
  return (
    <Grid display="flex" justifyContent="center">
      <iframe
        style={{ borderRadius: "12px" }}
        src={playlistUrl}
        width={width}
        height={height}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </Grid>
  );
};
