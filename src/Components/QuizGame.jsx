import React, { useState } from "react";
import "../css/QuizGame.css";
import "../css/lovetest.css"; 

const quizData = [
  {
    question: "What’s my favorite color? 🎨",
    options: ["Pink 💖", "Blue 💙", "Purple 💜", "Yellow 💛"],
    answer: "Blue 💙",
  },
  {
    question: "What do I usually say when I’m annoyed? 😤",
    options: [
      "Leave me alone!",
      "Han Thik 😑",
      "Nothing… silent treatment 😶",
      "You’re impossible! 🙄",
    ],
    answer: "Han Thik 😑",
  },
  {
    question: "Which memory of us still gives me butterflies? 🦋",
    options: [
      "Our first hug",
      "Ahm! The Train one!",
      "Our late-night talks 💬",
      "When you leaned on my shoulder 💕",
    ],
    answer: "Ahm! The Train one!",
  },
  {
    question: "Who apologizes first after we fight? ⚡",
    options: [
      "Me 😅",
      "You 🙄",
      "Both at the same time 🤝",
      "No one, we just eat 😋",
    ],
    answer: "Me 😅",
  },
  {
    question: "If I could kiss you right now, where would I kiss first? 😘",
    options: ["Forehead", "Cheeks", "Lips 💋", "Neck 👄"],
    answer: "Forehead",
  },
  {
    question: "If I could eat only one thing forever, it would be… 🍴",
    options: ["You 💃", "Cream Roll 🥟", "Ice Cream 🍦", "Black current Shake 👩‍🍳"],
    answer: "You 💃",
  },
  {
    question: "What’s the one thing I can never resist about you? 💞",
    options: [
      "Your laugh",
      "Your pouty face 🥺",
      "Winnie POOOOOH!!!",
      "Your touch 😍",
    ],
    answer: "Winnie POOOOOH!!!",
  },
  {
    question: "What gives me instant peace whenever I feel low? 🌸",
    options: [
      "Talking to you",
      "Listening to your voice🎤",
      "Seeing your smile",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "If I could freeze one moment with you forever, it would be… ⏳",
    options: [
      "Our first Kiss",
      "The time we laughed endlessly 😂",
      "That moment when you called me yours",
      "Every single second",
    ],
    answer: "Every single second",
  },
  {
    question: "Final one… Who is the only person that makes my heart race like crazy? 💓",
    options: ["Sydey Sweeney", "Messi", "YOU 💕", "Mingi"],
    answer: "YOU 💕",
  },
];

function QuizGame() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [showLoveTest, setShowLoveTest] = useState(false);

  const handleAnswer = (option) => {
    if (option === quizData[currentQ].answer) {
      setScore(score + 1);
    }

    const nextQ = currentQ + 1;
    if (nextQ < quizData.length) {
      setCurrentQ(nextQ);
    } else {
      setShowResult(true);
      launchHearts();
      setTimeout(() => setShowLoveTest(true), 4000);
    }
  };

  const launchHearts = () => {
    const newHearts = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 3 + 2,
    }));
    setHearts(newHearts);

    setTimeout(() => setHearts([]), 5000);
  };

  return (
    <div className="quiz-container">
      {!showResult && !showLoveTest && (
        <>
          <h1 className="quiz-title">💖 Fun Quiz 💖</h1>
          <div className="quiz-card">
            <h2 className="quiz-question">{quizData[currentQ].question}</h2>
            <div className="quiz-options">
              {quizData[currentQ].options.map((option, idx) => (
                <button
                  key={idx}
                  className="quiz-btn"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="progress">
              Question {currentQ + 1} of {quizData.length}
            </p>
          </div>
        </>
      )}

      {showResult && !showLoveTest && (
        <div className="quiz-result">
          <h2>
            You scored {score}/{quizData.length} 💕
          </h2>
          {score === quizData.length ? (
            <p className="result-msg">
              Wow! You know me PERFECTLY 💖✨ <br />
              Now Time for the Most Important Question of alllll Timeeee!!! 🥰
            </p>
          ) : (
            <p className="result-msg">
              Hehe, cute! You still know me better than anyone 💕 <br />
              But… now comes the Most Important Question!!!! 💘
            </p>
          )}
        </div>
      )}

      {showLoveTest && <LoveTest />}

      {/* quiz hearts */}
      <div className="hearts-container">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              animationDuration: `${heart.duration}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>
    </div>
  );
}

function LoveTest() {
  const [yesSize, setYesSize] = useState(22);
  const [noClicks, setNoClicks] = useState(0);
  const [finalMsg, setFinalMsg] = useState("");
  const [showHearts, setShowHearts] = useState(false);

  const handleNo = () => {
    setNoClicks((prev) => {
      if (prev + 1 >= 7) {
        setFinalMsg("Hehe 😘 I KNEW IT! You love meeeee ❤️💖");
      }
      return prev + 1;
    });

    setYesSize((prev) => prev + 12); // grows each time
  };

  const handleYes = () => {
    setFinalMsg("Awwww 🥰 I love you tooooo 💕");
    setShowHearts(true);

    setTimeout(() => setShowHearts(false), 5000);
  };

  return (
    <div className="love-test-container">
      <h1 className="love-question">Do you love me? 💘</h1>

      {!finalMsg ? (
        <div className="love-buttons">
          <button
            className={`yes-btn ${yesSize > 22 ? "bounce" : ""}`}
            style={{ fontSize: `${yesSize}px` }}
            onClick={handleYes}
          >
            Yes 💖
          </button>
          <button className="no-btn" onClick={handleNo}>
            No 🙅
          </button>
        </div>
      ) : (
        <div className="love-answer">
          <h2 className="answer-text">{finalMsg}</h2>
          <p className="answer-sub">Forever & Always 💞</p>
        </div>
      )}

      {showHearts && (
        <div className="hearts-container">
          {Array.from({ length: 25 }).map((_, i) => (
            <span
              key={i}
              className="heart"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 24 + 16}px`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            >
              ❤️
            </span>
          ))}
        </div>
      )}
    </div>
  );
}


export default QuizGame;
