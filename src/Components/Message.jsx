import React, { useEffect, useState } from "react";
import "../css/Message.css";
import { driveAsset } from '../lib/driveAsset';

const love1 = driveAsset("Snapchat-414215647.jpg");
const love2 = driveAsset("IMG-20250706-WA0076.jpg");
const backgroundImg = driveAsset("Nov1.jpg");

const TypingEffect = () => {
const message = `💖`;


  const sentences = message.split("\n");
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentSentenceIndex < sentences.length) {
      let current = sentences[currentSentenceIndex];
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < current.length) {
          setCurrentText((prev) => prev + current[i]);
          i++;
        } else {
          clearInterval(typeInterval);
          setDisplayedLines((prev) => [...prev, current]);
          setCurrentText("");
          setCurrentSentenceIndex((prev) => prev + 1);
        }
      }, 40);
      return () => clearInterval(typeInterval);
    }
  }, [currentSentenceIndex]);

  return (
    <div className="typing-container">
      <div
        className="background-blur"
        style={{
          backgroundImage: `url(${backgroundImg})`
        }}
      ></div>
      <div className="image-section">
        <img src={love1} alt="love 1" className="love-img love-img-left" />
        <img src={love2} alt="love 2" className="love-img love-img-right" />
      </div>
      <h2 className="anniversary-text">Happy 9 Month Anniversary, My Love ❤️</h2>
      <div className="typing-text">
        {displayedLines.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
        {currentText && (
          <p>
            {currentText}
            <span className="cursor">|</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default TypingEffect;

