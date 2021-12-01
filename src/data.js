import { happyLyrics } from "./lyrics";
import happy from "./songs/happy.mp3";

export const songs = {
  happy: {
    slug: "happy",
    title: "Happy",
    artist: "Pharrell Williams",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Beatles_Abbey_Road_cover.jpg/220px-Beatles_Abbey_Road_cover.jpg",
    lyrics: happyLyrics,
    music: happy,
  },
};
