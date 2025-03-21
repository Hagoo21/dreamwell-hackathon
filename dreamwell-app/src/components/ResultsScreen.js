import React from 'react';
import '../App.css';

function ResultsScreen({ currentScreen, onNavigate }) {
  // Dummy data for influencers
  const influencers = [
    {
      id: 1,
      reach: "500K",
      engagement: "4.8%",
      demographic: "18-24",
      content: "Lifestyle"
    },
    {
      id: 2,
      reach: "1.2M",
      engagement: "3.5%",
      demographic: "25-34",
      content: "Fashion"
    },
    {
      id: 3,
      reach: "750K",
      engagement: "5.2%",
      demographic: "18-30",
      content: "Travel"
    },
    {
      id: 4,
      reach: "2.5M",
      engagement: "3.2%",
      demographic: "20-35",
      content: "Tech"
    },
    {
      id: 5,
      reach: "900K",
      engagement: "4.1%",
      demographic: "22-28",
      content: "Beauty"
    }
  ];

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
      
      <div className="results-container">
        <div className="metrics-column">
          <div className="metric-row">
            <span className="metric-label">Reach:</span>
          </div>
          <div className="metric-row">
            <span className="metric-label">Engagement:</span>
          </div>
          <div className="metric-row">
            <span className="metric-label">Demographic:</span>
          </div>
          <div className="metric-row">
            <span className="metric-label">Content:</span>
          </div>
        </div>
        
        <div className="influencer-grid">
          {influencers.map((influencer, index) => (
            <div key={index} className="influencer-card">
              <div className="profile-pic"></div>
              <div className="influencer-metrics">
                <div className="metric-value">{influencer.reach}</div>
                <div className="metric-value">{influencer.engagement}</div>
                <div className="metric-value">{influencer.demographic}</div>
                <div className="metric-value">{influencer.content}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="review-button-container">
          <button 
            className="review-button" 
            onClick={() => onNavigate(3)}
          >
            Review<br />Manually
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultsScreen; 