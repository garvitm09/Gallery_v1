import React, { useState } from 'react';
import '../css/Gallery.css';
import { driveAsset } from '../lib/driveAsset';

const couple1 = driveAsset("Screenshot_20250522_032546.jpg");
const couple2 = driveAsset("Screenshot_20250522_034153.jpg");
const couple3 = driveAsset("side_pose.jpg");
const couple4 = driveAsset("Screenshot_20250522_041646.jpg");
const couple5 = driveAsset("Screenshot_20250522_041743.jpg");
const couple6 = driveAsset("Screenshot_20250522_041818.jpg");
const couple7 = driveAsset("Screenshot_20250522_041831.jpg");
const couple8 = driveAsset("Screenshot_20250522_041947.jpg");
const couple9 = driveAsset("Screenshot_20250522_041959.jpg");
const couple10 = driveAsset("Screenshot_20250522_042013.jpg");
const couple11 = driveAsset("Screenshot_20250522_042013.jpg");
const couple12 = driveAsset("Snapchat-247139549.jpg");
const couple13 = driveAsset("Snapchat-414215647.jpg");
const couple14 = driveAsset("Snapchat-712705533~2.jpg");
const couple15 = driveAsset("Snapchat-1082952972.jpg");
const couple16 = driveAsset("Snapchat-712705533~2.jpg");
const couple17 = driveAsset("Snapchat-1270632635.jpg");
const couple18 = driveAsset("Snapchat-1605814228.jpg");
const couple19 = driveAsset("Snapchat-1638720875.jpg");
const couple20 = driveAsset("Snapchat-1841978905.jpg");
const couple21 = driveAsset("Snapchat-1983792865.jpg");
const couple22 = driveAsset("Snapchat-1996011902.jpg");
const couple23 = driveAsset("Screenshot_20250522_052958.jpg");
const couple24 = driveAsset("Screenshot_20250522_053015.jpg");
const couple25 = driveAsset("Screenshot_20250522_053037.jpg");
const couple26 = driveAsset("Screenshot_20250522_053055.jpg");
const couple27 = driveAsset("Screenshot_20250522_053135.jpg");
const couple28 = driveAsset("Snapchat-502245577.jpg");
const couple29 = driveAsset("Snapchat-2003368446.jpg");
const couple30 = driveAsset("Snapchat-2131752278.jpg");
const couple31 = driveAsset("Screenshot_20261017-151342_Snapchat~2.jpg");
const couple32 = driveAsset("Screenshot_20261017-151354_Snapchat~2.jpg");
const couple33 = driveAsset("Screenshot_20261017-151418_Snapchat~2.jpg");
const couple34 = driveAsset("Screenshot_20261017-151536_Snapchat~2.jpg");
const couple35 = driveAsset("Screenshot_20261017-151556_Snapchat~2.jpg");

// Import images directly
  const CuteImageCards = () => {
    // Image data with details
    const imageCards = [
			        { 
        id: 1, 
        src: couple34, 
        tag: "You",
        title: 'Deperate to be that burger of yours', 
        // date: 'November 5, 2024', 
        description: 'Kudos to the attemp...lol' 
      },
   { 
        id: 2, 
        src: couple35, 
        tag: "You",
        title: 'Alcoholic', 
        // date: 'November 5, 2024', 
        description: 'Best date ever' 
      },	        { 
        id: 33, 
        src: couple33, 
        tag: "Us",
        title: 'You are contagious', 
        // date: 'November 5, 2024', 
        description: 'Is this what falling madly in l_v_ is?' 
      },

	        { 
        id:4, 
        src: couple32, 
        tag: "Us",
        title: "Can't stop admiring you", 
        // date: 'November 5, 2024', 
        description: 'Everyday prettier than ever' 
      },	        { 
        id: 5, 
        src: couple31, 
        tag: "Us",
        title: 'Out to beat all those couples !!', 
        // date: 'November 5, 2024', 
        description: 'Are we sexy or are we sexy?' 
      },
      
      { 
        id: 6, 
        src: couple6, 
        tag: "Us",
        title: 'Coffee Date', 
        // date: 'November 5, 2024', 
        description: 'Squeezing into the frame' 
      },
      { 
        id: 7, 
        src: couple7, 
        tag: "Us",
        title: 'Dance and dozed', 
        // date: 'November 5, 2024', 
        description: 'Guys Garvit likes Mittali!!' 
      },
      { 
        id: 8, 
        src: couple8, 
        tag: "US",
        title: 'Hiking', 
        // date: 'November 5, 2024', 
        description: 'Am I funncy or am I funny?' 
      },
      { 
        id: 9, 
        src: couple9, 
        tag: "Us",
        title: 'Uss', 
        // date: 'November 5, 2024', 
        description: 'No matter how far I see can only see us together.' 
      },
      { 
        id: 10, 
        src: couple10, 
        tag: "Us",
        title: `You glaring I'm staring`, 
        // date: 'November 5, 2024', 
        description: 'The best click so far!!' 
      },
      // { 
      //   id: 11, 
      //   src: couple11, 
      //   title: 'Coffee Date', 
      //   date: 'November 5, 2024', 
      //   description: 'Morning coffees and sweet conversations' 
      // },
      { 
        id: 12, 
        src: couple12, 
        tag: "Us",
        title: 'Handsome ', 
        // date: 'November 5, 2024', 
        description: 'Got a nice looking guy there you babe' 
      },
      { 
        id: 13, 
        src: couple13,
        tag: "Us", 
        title: 'Sticking together', 
        // date: 'November 5, 2024', 
        description: 'This picture can turn some people to ashes' 
      },
      { 
        id: 14, 
        src: couple14,
        tag: "Us" ,
        title: 'Coffee Date', 
        // date: 'November 5, 2024', 
        description: 'We kissed, we kissed ????' 
      },
      { 
        id: 15, 
        src: couple15, 
        tag:"Us ",
        title: 'Comfy you', 
        // date: 'November 5, 2024', 
        description: 'When you feel home!' 
      },
      // { 
      //   id: 16, 
      //   src: couple16, 
      //   title: 'Coffee Date', 
      //   date: 'November 5, 2024', 
      //   description: 'Morning coffees and sweet conversations' 
      // },
      { 
        id: 17, 
        src: couple17, 
        tag: "Us",
        title: 'Tri and still tripped', 
        // date: 'November 5, 2024', 
        description: 'I tripped for you...' 
      },
      { 
        id: 18, 
        src: couple18, 
        tag: "Us",
        title: 'Coffee Date', 
        // date: 'November 5, 2024', 
        description: 'Hot usss' 
      },
      { 
        id: 19, 
        src: couple19, 
        tag: "Us",
        title: 'Picture perfect', 
        // date: 'November 5, 2024', 
        description: 'Cuteseeess' 
      },
      { 
        id: 20, 
        src: couple20, 
        tag: "Us",
        title: 'Vibe matched', 
        // date: 'November 5, 2024', 
        description: 'Vibe was a rollercoaster' 
      },
      { 
        id: 21, 
        src: couple21,
        tag: "Us", 
        title: 'Stealer', 
        // date: 'November 5, 2024', 
        description: 'Give my heart back!!' 
      },
      { 
        id: 22, 
        src: couple22, 
        tag: "Us",
        title: 'Twinning', 
        // date: 'November 5, 2024', 
        description: 'Twinning and tuning' 
      },
      { 
        id: 23, 
        src: couple23, 
        tag: "You",
        title: 'Yellow butterfellow', 
        // date: 'November 5, 2024', 
        description: 'The sarso ka saag I can live upon all my life' 
      },
      { 
        id: 24, 
        src: couple24, 
        tag: "You",
        title: 'Cuuutiessttt', 
        // date: 'November 5, 2024', 
        description: 'Am i the lucky one or am I the lucky one?' 
      },
      { 
        id: 25, 
        src: couple25, 
        tag: "You",
        title: `Hide n seek`, 
        // date: 'November 5, 2024', 
        description:`Hide n seek still can't hide your cuteness` 
      },
      { 
        id: 26, 
        src: couple26, 
        tag: "You",
        title: 'Those two <3', 
        // date: 'November 5, 2024', 
        description: `There's some mystic dew on your face` 
      },
      { 
        id: 27, 
        src: couple27, 
        tag: "You",
        title: 'Beauty', 
        // date: 'November 5, 2024', 
        description: 'Stunning you!' 
      },
      { 
        id: 28, 
        src: couple28, 
        tag: "Us",
        title: 'Growing and celebrating', 
        // date: 'November 5, 2024', 
        description: '5 month and still counting' 
      },
      { 
        id: 29, 
        src: couple29, 
        tag: "You",
        title: 'Shades and you <3', 
        // date: 'November 5, 2024', 
        description: 'You so pretty!' 
      },
      { 
        id: 30, 
        src: couple30, 
        tag: "You",
        title: 'Cutieee', 
        // date: 'November 5, 2024', 
        description: 'You always leave me craving ' 
      },
{ 
        id: 31, 
        src: couple5, 
        tag: "Us",
        title: 'Traditionals', 
        // date: 'October 10, 2024', 
        description: 'why look so good together?' 
      },
      { 
        id: 32, 
        src: couple4, 
        tag: "You",
        title: `Bbiee's bdayyy`, 
        // date: 'September 3, 2024', 
        description: 'glad for this day' 
      },
      { 
        id: 33, 
        tag: "You",
        src: couple3, 
        title: `What's sassy`, 
        // date: 'August 22, 2024', 
        description: `Why can't you look bad?` 
      },
	          { 
        id: 34, 
        src: couple1, 
        tag: "You",
        title: 'Beautiful Youu', 
        // date: 'June 15, 2024', 
        description: 'Golden Hour with chai and you' 
      },
      { 
        id: 35, 
        src: couple2, 
        tag: "You",
        title: 'Cute little pie', 
        // date: 'July 8, 2024', 
        description: 'You never fail to melt my heart' 
      }
	       
    ];

    // State to track which card is flipped
  const [filter, setFilter] = useState('All');
  const [flippedCard, setFlippedCard] = useState(null);

  // 2. Filter logic based on tag
  const filteredCards = imageCards.filter((card) => {
    if (filter === 'All') return true;
    return card.tag?.toLowerCase() === filter.toLowerCase();
  });

  // 3. Flip handler remains the same
  const handleCardFlip = (id) => {
    setFlippedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="cute-cards-container">
      <header className="cute-cards-header">
        <h1 className="title"> Adorable Moments</h1>
        <p className="subtitle">Every picture tells our story ♥</p>
      </header>

      {/* 4. Filter buttons */}
      <div className="filter-buttons">
        {['All', 'Us', 'You'].map((type) => (
          <button 
            key={type}
            className={`filter-btn ${filter === type ? 'active' : ''}`}
            onClick={() => setFilter(type)}
          >
            {type} 
          </button>
        ))}
      </div>

      {/* 5. Display filtered cards */}
      <div className="cards-grid">
        {filteredCards.map((card) => (
          <div 
            className={`card ${flippedCard === card.id ? 'flipped' : ''}`}
            key={card.id}
            onClick={() => handleCardFlip(card.id)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img 
                  src={card.src} 
                  alt={card.title} 
                  className="card-image" 
                />
                <div className="card-overlay">
                  <h3 className="card-title">{card.title}</h3>
                  <span className="flip-info">♥ Click for more ♥</span>
                </div>
              </div>
              <div className="card-back">
                <div className="back-content">
                  <h3>{card.title}</h3>
                  <div className="date-badge">{card.date}</div>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
            <div className="card-shine"></div>
          </div>
        ))}
      </div>

      {/* Floating hearts */}
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <div className="heart" key={i} style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 3}s`
          }}>♥</div>
        ))}
      </div>
    </div>
  );
};

export default CuteImageCards;
