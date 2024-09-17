import React, { useState } from "react";
import balsamOmMayak from "../../static/music/balsamOmMayak.mp3"
import kalushBalsamGrayMuzikant from "../../static/music/kalushBalsamGrayMuzikant.mp3"
import mamarikaBalsamShepocheDoshch from "../../static/music/mamarikaBalsamShepocheDoshch.mp3"



const songs = [
  {
    name: "Mayakom",
    src: balsamOmMayak,
  },
  {
    name: "grayMuzikant",
    src: kalushBalsamGrayMuzikant,
  },
  {
    name: "shepocheDoshch",
    src: mamarikaBalsamShepocheDoshch,
  },
];

const Player = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  const currentSong = songs[currentIndex];
  return (
    <div>
      {currentSong && (
        <div>
          <p>Зараз грає: {currentSong.name}</p>
          <audio controls src={currentSong.src}>
            Ваш браузер не підтримує аудіо-елемент.
          </audio>
          <div>
            <button onClick={handlePrevious}>Попередня пісня</button>
            <button onClick={handleNext}>Наступна пісня</button>
          </div>
        </div>
      )}
      <p>Музичний плеєр</p>
    </div>
  );
};

export default Player;
