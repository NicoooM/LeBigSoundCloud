import { happyLyrics, californicationLyrics } from "./lyrics";
import happy from "./songs/happy.mp3";
import happyCover from "./images/happy.jpg";

export const songs = {
  happy: {
    slug: "happy",
    title: "Happy",
    artist: "Pharrell Williams",
    cover: happyCover,
    lyrics: happyLyrics,
    music: happy,
  },
  californication: {
    slug: "californication",
    title: "Californication",
    artist: "Red Hot Chili Peppers",
    cover: happyCover,
    lyrics: californicationLyrics,
    music: happy,
  },
};
