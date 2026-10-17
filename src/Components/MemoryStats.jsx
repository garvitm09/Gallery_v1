// src/components/MemoryStats.jsx

import React from 'react';
import '../css/MemoryStats.css';
import { Heart, Image, Gift, Star } from 'lucide-react';

const stats = [
  { icon: <Heart className="icon heart" />, value: '140', label: 'Days Together' },
  { icon: <Image className="icon image" />, value: '28', label: 'Photos' },
  { icon: <Gift className="icon gift" />, value: '∞', label: 'Special Days' },
  { icon: <Star className="icon star" />, value: '∞', label: 'Memories' },
];

const MemoryStats = () => {
  return (
    <div className="memory-stats">
      {stats.map((stat, index) => (
        <div className="memory-card" key={index}>
          <div className="memory-icon">{stat.icon}</div>
          <div className="memory-value">{stat.value}</div>
          <div className="memory-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default MemoryStats;
