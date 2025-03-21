import React, { useState } from 'react';
import './App.css';
import SearchScreen from './components/SearchScreen';
import ResultsScreen from './components/ResultsScreen';
import VideoScreen from './components/VideoScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleNavigate = (screenNumber) => {
    setCurrentScreen(screenNumber);
  };

  return (
    <div className="app">
      {currentScreen === 1 && (
        <SearchScreen 
          currentScreen={currentScreen} 
          onNavigate={handleNavigate} 
        />
      )}
      
      {currentScreen === 2 && (
        <ResultsScreen 
          currentScreen={currentScreen} 
          onNavigate={handleNavigate} 
        />
      )}
      
      {currentScreen === 3 && (
        <VideoScreen 
          currentScreen={currentScreen} 
          onNavigate={handleNavigate} 
        />
      )}
    </div>
  );
}

export default App;
