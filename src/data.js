//début imports
import {
  happyLyrics,
  californicationLyrics,
  earfquakeLyrics,
  hurricaneLyrics,
} from "./lyrics"; //importer les paroles du tableau à deux dimensions

import happy from "./songs/happy.mp3"; //importer les mp3
import happyCover from "./images/happy.jpg"; //importer les Cover
import californicationCover from "./images/californication.jpg"; //importer les mp3
import californication from "./songs/californication.mp3"; //importer les Cover
import earfquakeCover from "./images/earfquake.jpg"; //importer les mp3
import earfquake from "./songs/earfquake.mp3"; //importer les Cover
import hurricaneCover from "./images/hurricane.png"; //importer les mp3
import hurricane from "./songs/hurricane.mp3"; //importer les Cover
//fin imports

//début exports
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
    cover: californicationCover,
    lyrics: californicationLyrics,
    music: californication,
  },
  earfquake: {
    slug: "earfquake",
    title: "Earfquake",
    artist: "Tyler, The Creator",
    cover: earfquakeCover,
    lyrics: earfquakeLyrics,
    music: earfquake,
  },
  hurricane: {
    slug: "hurricane",
    title: "Hurricane",
    artist: "Kanye West",
    cover: hurricaneCover,
    lyrics: hurricaneLyrics,
    music: hurricane,
  },
};
//fin exports
