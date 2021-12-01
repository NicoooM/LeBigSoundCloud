import { tLyrics } from "../../lyrics.js";
import ReactAudioPlayer from "react-audio-player";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Player from "../../components/Player";
import { useParams } from "react-router-dom";
import { songs } from "../../data";

function Song() {
  const { slug } = useParams();
  const song = songs[slug];

  return (
    <div>
      <Player
        title={song.title}
        artist={song.artist}
        lyrics={song.lyrics}
        song={song.music}
        cover={song.cover}
      />
    </div>
  );
}

export default Song;
