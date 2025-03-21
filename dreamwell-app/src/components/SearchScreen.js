import React, { useState } from 'react';
import '../App.css';

function SearchScreen({ currentScreen, onNavigate }) {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="screen">
      <h1 className="header">Dreamwell Influencer Search</h1>
      
      <div className="navigation-dots">
        <button 
          className={`nav-dot ${currentScreen === 1 ? 'active' : ''}`} 
          onClick={() => onNavigate(1)}
        ></button>
        <button 
          className={`nav-dot ${currentScreen === 2 ? 'active' : ''}`} 
          onClick={() => onNavigate(2)}
        ></button>
        <button 
          className={`nav-dot ${currentScreen === 3 ? 'active' : ''}`} 
          onClick={() => onNavigate(3)}
        ></button>
      </div>
      
      <div className="content">
        <textarea 
          className="search-input" 
          placeholder="type here"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        
        <button 
          className="search-button" 
          onClick={() => onNavigate(2)}
        >
          Start Search
        </button>
      </div>
    </div>
  );
}

export default SearchScreen; 