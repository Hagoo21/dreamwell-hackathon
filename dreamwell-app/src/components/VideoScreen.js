import React, { useState } from 'react';
import '../App.css';

function VideoScreen({ currentScreen, onNavigate }) {
  const [commentText, setCommentText] = useState('');
  
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
      
      <div className="video-content">
        <h2 className="video-title">Video Title</h2>
        
        <div className="video-container">
          <div className="prev-video-button" onClick={() => console.log('Previous video')}>
            {/* Only the visible part is clickable */}
          </div>
          
          <div className="video-player">
            <div className="play-button">
              <div className="play-icon"></div>
            </div>
          </div>
          
          <div className="next-video-button" onClick={() => console.log('Next video')}>
            {/* Only the visible part is clickable */}
          </div>
        </div>
        
        <div className="video-details">
          <div className="comments-section">
            <div className="user-icons">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="user-icon"></div>
              ))}
            </div>
            
            <div className="comment-box">
              <input
                type="text"
                className="comment-input"
                placeholder="type here"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button className="send-button">
                <div className="send-icon"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoScreen; 