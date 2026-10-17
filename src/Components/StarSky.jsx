import React, { useState, useMemo } from "react";
import "../css/StarSky.css";

const messages = [
  "You're my brightest star 🌟",
  "Whenever I see stars, I think of you 💖",
  "You light up my darkest nights ✨",
  "You're my universe 🌌",
  "Even the stars envy your shine 💕",
  "My love for you is infinite, like the stars 🔭",
  "Every star is a wish, and you’re all of mine 💫",
  "Somewhere between the stars, I found you 🌠",
  "You're my constant, just like Polaris ⭐",
  "The night sky feels empty without you 🌙",
  "You’re my moonlight in the darkness 🌕",
  "Among a billion stars, you’re my favorite 💖",
  "Our love is written in the constellations ✨",
  "You’re the shooting star I always wished for 🌠",
  "With you, even galaxies look small 🌌",
  "Your smile outshines the Milky Way 🌟",
  "No telescope could find a star like you 🔭",
  "You’re the reason the night feels magical 🌃",
  "Every heartbeat is a star that calls your name ❤️",
  "Our love glows brighter than Orion’s belt ✨",
  "Like the North Star, you guide me always ⭐",
  "If kisses were stars, you’d own the sky 💋",
  "We’re two souls dancing among the constellations 💫",
  "The universe made you just for me 🌌",
  "You’re the sparkle in my forever ✨",
  "Even infinite stars can’t match your beauty 💎",
  "Our love is the gravity holding me together 🪐",
  "You’re my little galaxy of happiness 🌌",
  "Every night sky feels painted with you 🎨",
  "You make my universe whole 💖",
  "Stars fall, but my love for you never will 🌠",
  "Even black holes can’t pull me away from you 🖤",
  "You’re brighter than Sirius, the brightest star 🌟",
  "You’re the star that makes my dreams glow 🌙",
  "I’d cross galaxies just to hold your hand 💫",
  "You’re the magic in my midnight skies 🌌",
  "Every star whispers your name ✨",
  "You’re the sunrise after the darkest night 🌅",
  "The cosmos itself envies our love 💕",
  "You’re the wish that came true ⭐",
  "You’re the eternity I never knew I needed ⏳",
  "Your love is my guiding constellation 🌌",
  "Like stars, our love is infinite and eternal 💫",
  "You’re the spark in my forever 🔥",
  "Even galaxies fade, but you remain 💖",
  "Our love burns brighter than supernovas 💥",
  "The sky feels empty when you’re not around 🌙",
  "You’re my cosmic miracle 🌌",
  "Every shooting star is jealous of us 🌠",
  "You light up my heart like stardust ✨",
  "You’re the poetry of the universe 📝",
  "You make the darkest nights beautiful 🌃",
  "You’re my star, my sky, my everything 🌌",
  "Even time stops to watch you shine ⏳",
  "You’re the reason the stars sparkle tonight 💖",
  "The universe expands, but my love grows faster 🌌",
  "In your eyes, I see galaxies 🌠",
  "You’re the reason constellations exist ⭐",
  "You’re my eternal night sky 💫"
];

const StarrySky = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  // Generate stars only once
  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      size: `${Math.random() * 3 + 2}px`,
      message: messages[i % messages.length]
    }));
  }, []);

  return (
    <div className="starry-container">
      {/* Instruction */}
      <p className="instructions">Click a star to reveal a message ✨</p>

      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size
          }}
          onClick={() => setSelectedMessage(star.message)}
        />
      ))}

      {selectedMessage && (
        <div className="message-box">
          <p>{selectedMessage}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelectedMessage(null);
            }}
          >
          </button>
        </div>
      )}
    </div>
  );
};

export default StarrySky;
