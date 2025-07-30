import React from 'react';
import WistiaVideoPlayer from './components/WistiaVideoPlayer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wistia Video Player POC</h1>
        <div className="video-container">
          <WistiaVideoPlayer mediaId="f96o4ct9gq" playerColor="#1e64f0" />
        </div>

      </header>
    </div>
  );
}

export default App;