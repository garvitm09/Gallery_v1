import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CuteImageCards from './Components/Gallery';
import Navbar from './Components/Navbar';
import TypingEffect from './Components/Message';
import Cards from './Components/CommentCards';
import CouplesGallery from './Components/final'
import QuizGame from './Components/QuizGame';
import StarSky from './Components/StarSky';
import PhotoWrap from './Components/wrapped';
import BirthdayLanding from './Components/BirthdayLanding';
import MusicPlayer from './Components/MusicPlayer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
		<Route path="/" element={<BirthdayLanding />} />
        <Route path="/" element={<TypingEffect />} />
        <Route path="/gallery" element={<CuteImageCards />} />
        <Route path="/quiz" element={<QuizGame />} />
        <Route path="/star" element={<StarSky />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/photo" element={<CouplesGallery />} />
        <Route path="/wrapped" element={<PhotoWrap />} />

        {/* Add more routes here later if you want */}
      </Routes>
	  <MusicPlayer />
    </Router>
  );
}

export default App;
