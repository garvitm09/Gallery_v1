import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Heart, X, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { driveAsset } from '../lib/driveAsset';

const Jan1 = driveAsset("Jan1.png");
const Jan2 = driveAsset("Jan2.png");
const Jan3 = driveAsset("Jan3.png");
const Feb1 = driveAsset("Feb1.png");
const Feb2 = driveAsset("Feb2.png");
const Feb3 = driveAsset("Feb3.png");
const Mar1 = driveAsset("Mar1.png");
const Mar2 = driveAsset("Mar2.png");
const Mar3 = driveAsset("Mar3.png");
const Mar4 = driveAsset("Mar4.png");
const April1 = driveAsset("April1.jpg");
const April2 = driveAsset("April2.png");
const May1 = driveAsset("May1.jpg");
const May2 = driveAsset("May2.png");
const June1 = driveAsset("June1.png");
const July1 = driveAsset("July1.jpg");
const July2 = driveAsset("July2.jpg");
const July3 = driveAsset("July3.jpg");
const July4 = driveAsset("July4.jpg");
const July5 = driveAsset("July5.jpg");
const July6 = driveAsset("July6.png");
const July7 = driveAsset("July7.png");
const Aug1 = driveAsset("Aug1.png");
const Aug2 = driveAsset("Aug2.jpg");
const Aug3 = driveAsset("Aug3.png");
const Sep1 = driveAsset("Sep1.jpg");
const Sep2 = driveAsset("Sep2.jpg");
const Sep3 = driveAsset("Sep3.jpg");
const Sep4 = driveAsset("Sep4.jpg");
const Oct1 = driveAsset("Oct1.jpg");
const Oct2 = driveAsset("Oct2.jpg");
const Oct3 = driveAsset("Oct3.jpg");
const Oct4 = driveAsset("Oct4.png");
const Oct5 = driveAsset("Oct5.jpg");
const Oct6 = driveAsset("Oct6.jpg");
const Nov1 = driveAsset("Nov1.jpg");
const Nov2 = driveAsset("Nov2.jpg");
const Nov3 = driveAsset("Nov3.jpg");
const Nov4 = driveAsset("Nov4.jpg");
const Nov5 = driveAsset("Nov5.jpg");
const Nov6 = driveAsset("Nov6.jpg");
const Dec1 = driveAsset("Dec1.jpg");
const Dec2 = driveAsset("Dec2.jpg");
const Dec3 = driveAsset("Dec3.jpg");
const msc = driveAsset("Ed Sheeran - Photograph (Official Lyric Video).mp3");

const PhotoWrap = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [started, setStarted] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showingIntro, setShowingIntro] = useState(true);
  const audioRef = useRef(null);
  const autoNextTimerRef = useRef(null);


  // Background music URL - replace with your own music file

useEffect(() => {
  if (started && audioRef.current) {
    audioRef.current.volume = 0.25; // lyrics-friendly volume
    audioRef.current.play().catch(() => {});
    setIsMusicPlaying(true);
  }
}, [started]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };
  const scheduleAutoNext = () => {
  clearTimeout(autoNextTimerRef.current);

  if (isFinalSlide) return;

  autoNextTimerRef.current = setTimeout(() => {
    nextSlide();
  }, 5000);
};

  const months = [
    {
      month: "January",
      title: "Where It All Began",
      description: "The start of something beautiful",
      introText: "As the new year began, so did our beautiful journey together...",
      images: [
        Jan1,
        Jan2,
        Jan3
      ],
      color: "from-blue-600 to-purple-600"
    },
    {
      month: "February",
      title: "Love in Bloom",
      description: "Every moment with you felt like magic when you said those 3 magical words...!!",
      introText: "The month of love brought us closer, every day more magical than the last...",
      images: [
        Feb1,
        Feb2,
        Feb3
      ],
      color: "from-pink-600 to-rose-600"
    },
    {
      month: "March",
      title: "Spring Adventures",
      description: "New beginnings and endless laughter",
      introText: "Spring arrived with new adventures, even being physically apart every moment with you felt fresh and exciting...",
      images: [
        Mar1,
        Mar2,
        Mar3,
        Mar4
      ],
      color: "from-green-600 to-teal-600"
    },
    {
      month: "April",
      title: "Growing Together",
      description: "Building memories one day at a time",
      introText: "As flowers bloomed, so did our love, growing stronger with each passing day...(PS: We had our first date babe)",
      images: [
        April1,
        April2
      ],
      color: "from-yellow-600 to-orange-600"
    },
    {
      month: "May",
      title: "Sunshine Days",
      description: "Your smile brightened every moment",
      introText: "Warm days and warmer hearts, your smile made everything brighter...",
      images: [
        May1,
        May2
      ],
      color: "from-amber-600 to-red-600"
    },
    {
      month: "June",
      title: "Summer Vibes",
      description: "Hot days, warm hearts",
      introText: "Summer arrived with sunny days and brought we stayed the longest apart this month :(",
      images: [
        June1,

      ],
      color: "from-cyan-600 to-blue-600"
    },
    {
      month: "July",
      title: "Endless Summer",
      description: "Making waves and memories",
      introText: "The heart of summer, filled with laughter, sunshine, and endless joy...",
      images: [
         July1,
         July2,
         July3,
         July4,
         July5,
         July6,
         July7

      ],
      color: "from-orange-600 to-pink-600"
    },
    {
      month: "August",
      title: "Golden Hours",
      description: "Had to hold my bears when you were infront of me with that dress...UFF!!!",
      introText: "Golden sunsets and precious moments, each one more beautiful than the last...",
      images: [
          Aug1,
          Aug2,
          Aug3
      ],
      color: "from-purple-600 to-indigo-600"
    },
    {
      month: "September",
      title: "Autumn Begins",
      description: "Falling for you all over again",
      introText: "As leaves began to fall, I found myself falling for you all over again...",
      images: [
          Sep1,
          Sep2,
          Sep3,
          Sep4
      ],
      color: "from-red-600 to-yellow-600"
    },
    {
      month: "October",
      title: "Cozy Moments",
      description: "Wrapped in your love and warmth",
      introText: "Cozy evenings and warm embraces, finding comfort in your presence...",
      images: [
        Oct1,
        Oct2,
        Oct3,
        Oct4,
        Oct5,
        Oct6
      ],
      color: "from-orange-700 to-red-700"
    },
    {
      month: "November",
      title: "Grateful Hearts",
      description: "My baby's birthday month, I hope it was memorable",
      introText: "A month of gratitude, thankful for every moment, every smile, every you...",
      images: [
        Nov1,
        Nov2,
        Nov3,
        Nov4,
        Nov5,
        Nov6,
      ],
      color: "from-brown-600 to-orange-600"
    },
    {
      month: "December",
      title: "Our Year Together",
      description: "Here's to many more adventures ahead",
      introText: "As the year comes to an end, our story continues with infinite possibilities...",
      images: [
        Dec1,
        Dec2,
        Dec3
      ],
      color: "from-blue-700 to-purple-700"
    },
    {
  month: "Forever ❤️",
  title: "How Much I Love You",
  description: "",
  introText: "",
  images: [],
  color: "from-pink-800 via-rose-700 to-red-800",
  isFinal: true
}

  ];

const nextSlide = () => {
  if (showingIntro) {
    setShowingIntro(false);
  } else if (currentSlide < months.length - 1) {
    setCurrentSlide(prev => prev + 1);
    setShowingIntro(true);
  }
};


  const prevSlide = () => {
    if (!showingIntro) {
      setShowingIntro(true);
    } else if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setShowingIntro(false);
    }
  };

  // Floating hearts animation
  const FloatingHearts = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(12)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-white/10 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
          }}
        />
      ))}
    </div>
  );

  // Floating sparkles animation
  const FloatingSparkles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => (
        <Sparkles
          key={i}
          className="absolute text-white/20 animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
            width: `${15 + Math.random() * 25}px`,
            height: `${15 + Math.random() * 25}px`,
          }}
        />
      ))}
    </div>
  );

const StartScreen = () => (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 flex flex-col overflow-hidden">
      <FloatingHearts />
      <FloatingSparkles />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4 sm:space-y-8 animate-fade-in relative z-10 max-w-2xl mx-auto px-4">
          <div className="animate-heart-beat">
            <Heart className="w-16 h-16 sm:w-24 sm:h-24 mx-auto text-pink-300" fill="currentColor" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-4 animate-slide-down">
            Our 2025
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-pink-200 mb-4 sm:mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            A Year of Beautiful Memories
          </p>
          <p className="text-base sm:text-lg md:text-xl text-pink-300 mb-8 sm:mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            12 months, countless moments, one amazing you
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-white text-purple-900 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:scale-110 transition-all shadow-2xl animate-bounce-in hover:shadow-pink-500/50"
            style={{animationDelay: '0.6s'}}
          >
            Start Our Journey ✨
          </button>
        </div>
      </div>
      
      {/* Navigation for start screen */}
      <div className="flex justify-end items-center p-4 sm:p-6 gap-2 px-2 animate-slide-up relative z-10">
        <button
          onClick={() => setStarted(true)}
          className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all bg-white text-gray-900 hover:scale-110 shadow-lg hover:shadow-white/50"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );

  const ImageModal = () => {
    if (!enlargedImage) return null;

    return (
      <div 
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in overflow-hidden"
        onClick={() => setEnlargedImage(null)}
      >
        <button
          onClick={() => setEnlargedImage(null)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all z-10 animate-rotate-in"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
        <img 
          src={enlargedImage}
          alt="Enlarged view"
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-zoom-in"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    );
  };

  if (!started) {
    return <StartScreen />;
  }

  const current = months[currentSlide];
  const isFinalSlide = current.isFinal;

  // Month intro slide
  const MonthIntroSlide = () => (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 flex items-center justify-center overflow-hidden">
      <FloatingHearts />
      <FloatingSparkles />
      <div className="text-center space-y-6 sm:space-y-10 animate-fade-in relative z-10 max-w-3xl mx-auto px-4">
        <div className="animate-slide-down">
          <Sparkles className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-yellow-300 animate-sparkle-rotate" fill="currentColor" />
        </div>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4 animate-scale-in">
          {current.month}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-pink-200 animate-fade-in-up px-4" style={{animationDelay: '0.3s'}}>
          {current.introText}
        </p>
        <button
          onClick={nextSlide}
          className="bg-white text-purple-900 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:scale-110 transition-all shadow-2xl animate-bounce-in hover:shadow-pink-500/50"
          style={{animationDelay: '0.6s'}}
        >
          View Photos →
        </button>
      </div>
    </div>
  );

  const getGridClass = (imageCount) => {
    if (imageCount === 1) return "grid-cols-1";
    if (imageCount === 2) return "grid-cols-1 sm:grid-cols-2";
    if (imageCount === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    return "grid-cols-2 lg:grid-cols-2";
  };
  const FinalLoveSlide = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-pink-800 via-rose-700 to-red-800 flex items-center justify-center overflow-hidden">
    <FloatingHearts />
    <FloatingSparkles />

    <div className="text-center max-w-3xl mx-auto px-6 space-y-6 animate-fade-in relative z-10">
      <Heart
        className="w-24 h-24 mx-auto text-pink-300 animate-heart-beat"
        fill="currentColor"
      />

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white animate-slide-down">
        I Love You So Much Puchuuu!! ❤️
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-pink-200 animate-fade-in-up">
        Every smile of yours, every laugh, every moment we shared this year
        has made my life brighter in ways I never imagined.
      </p>

      <p className="text-lg sm:text-xl md:text-2xl text-pink-100 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        You are my comfort, my happiness, my safe place —
        and I fall for you every single day. I will never put anyone above you ever and you will be my utmost priority I promise baby. 
        I don't want to lose you but can't express either, but trust I love You 💖
      </p>

      <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        Please Stay PUCHUU!! 💖
      </p>
    </div>
  </div>
);

  return (
    <>
      <audio ref={audioRef} loop src={msc} />
      
      {showingIntro ? (
        <MonthIntroSlide />
      ) : isFinalSlide ?  (
          <FinalLoveSlide />
        ) : (
        <div className={`fixed inset-0 bg-gradient-to-br ${current.color} flex items-center justify-center overflow-hidden transition-all duration-1000`}>
          <FloatingHearts />
          <FloatingSparkles />
          
          {/* Music toggle button */}
          <button
            onClick={toggleMusic}
            className="fixed top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all z-40 shadow-lg animate-slide-down hover:scale-110"
          >
            {isMusicPlaying ? (
              <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
            ) : (
              <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            )}
          </button>

          <div className="max-w-6xl w-full h-full flex flex-col justify-center relative z-10 p-3 sm:p-4 md:p-6">
            {/* Progress bar */}
            <div className="mb-4 sm:mb-6 px-2 animate-slide-down">
              <div className="flex justify-between text-white text-xs sm:text-sm mb-2">
                <span className="font-semibold animate-fade-in">{current.month}</span>
                <span className="animate-fade-in" style={{animationDelay: '0.1s'}}>{currentSlide + 1} / {months.length}</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-1.5 sm:h-2 overflow-hidden">
                <div 
                  className="bg-white rounded-full h-1.5 sm:h-2 transition-all duration-700 animate-pulse-slow"
                  style={{ width: `${((currentSlide + 1) / months.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Main content - scrollable if needed */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden px-2" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl animate-scale-in border border-white/10">
                {/* Images grid */}
                <div className={`grid ${getGridClass(current.images.length)} gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6`}>
                  {current.images.map((image, index) => (
                    <div 
                      key={index}
                      className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform transition-all hover:scale-105 hover:shadow-pink-500/50 hover:-rotate-1 animate-slide-in-image border-2 border-white/20"
                      style={{ animationDelay: `${index * 0.15}s` }}
                      onClick={() => setEnlargedImage(image)}
                    >
                      <img 
                        src={image}
                        alt={`${current.month} - Photo ${index + 1}`}
                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>

                {/* Text content */}
                <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 mt-4 sm:mt-6 md:mt-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight px-2 animate-slide-up">
                    {current.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 px-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    {current.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-4 sm:mt-6 gap-2 px-2 animate-slide-up">
              <button
                onClick={prevSlide}
                className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all bg-white text-gray-900 hover:scale-110 shadow-lg hover:shadow-white/50"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Back</span>
                <span className="sm:hidden">Back</span>
              </button>

              <div className="flex space-x-1 sm:space-x-2">
                {months.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
                      index === currentSlide ? 'bg-white w-6 sm:w-10 animate-pulse' : 'bg-white/40 w-1.5 sm:w-2'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={currentSlide === months.length - 1 && !showingIntro}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all ${
                  currentSlide === months.length - 1 && !showingIntro
                    ? 'bg-white/20 text-white/40 cursor-not-allowed'
                    : 'bg-white text-gray-900 hover:scale-110 shadow-lg hover:shadow-white/50'
                }`}

              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <ImageModal />

      <style>{`
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        *::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-30px) rotate(15deg); opacity: 0.25; }
        }
        
        @keyframes sparkle {
          0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1) rotate(180deg); opacity: 0.3; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes heart-beat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
          75% { transform: scale(1.15); }
        }
        
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes rotate-in {
          from { opacity: 0; transform: rotate(-90deg) scale(0.5); }
          to { opacity: 1; transform: rotate(0) scale(1); }
        }
        
        @keyframes slide-in-image {
          from { opacity: 0; transform: translateX(-30px) rotate(-5deg); }
          to { opacity: 1; transform: translateX(0) rotate(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes sparkle-rotate {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(10deg) scale(1.1); }
          50% { transform: rotate(-10deg) scale(1.2); }
          75% { transform: rotate(5deg) scale(1.1); }
        }
        
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 3s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-scale-in { animation: scale-in 0.5s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.7s ease-out forwards; opacity: 0; }
        .animate-slide-down { animation: slide-down 0.6s ease-out forwards; opacity: 0; }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease-out forwards; opacity: 0; }
        .animate-bounce-in { animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; opacity: 0; }
        .animate-heart-beat { animation: heart-beat 1.5s ease-in-out infinite; }
        .animate-zoom-in { animation: zoom-in 0.4s ease-out; }
        .animate-rotate-in { animation: rotate-in 0.4s ease-out; }
        .animate-slide-in-image { animation: slide-in-image 0.6s ease-out forwards; opacity: 0; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        .animate-sparkle-rotate { animation: sparkle-rotate 3s ease-in-out infinite; }
      `}</style>
    </>
  );
};

export default PhotoWrap;
