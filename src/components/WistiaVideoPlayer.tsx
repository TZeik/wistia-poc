import React from 'react';
import { WistiaPlayer } from '@wistia/wistia-player-react';

/*
Wistia solo requiere el prop "mediaId", en mi caso como estoy utilizando una suscripción gratuita, el reproductor aparecerá con el branding de wistia. Revisando se utilizas otro tipo de suscripción puedes colocar una personalizada.
*/
interface WistiaVideoPlayerProps {
  mediaId: string;
  playerColor?: string;
}

const WistiaVideoPlayer: React.FC<WistiaVideoPlayerProps> = ({ mediaId, playerColor = '#1e64f0' }) => {
  
  const handlePlay = () => {
    console.log(`El video ${mediaId} se está reproduciendo. Aun no se actualiza porcentaje de curso`);
  };

  const handleEnd = () => {
    console.log(`El video ${mediaId} ha terminado. Entonces, actualiza porcentaje de curso`);
  };

  return (
    <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <WistiaPlayer
          mediaId={mediaId}
          playerColor={playerColor}
        /*
            Con esto el reproductor nos permite saber cuando se reproduce el video (onPlay) y cuando termina de reproducirse (onEnded), es último no toma en cuenta el tiempo de visualización 
        */
          onPlay={handlePlay}
          onEnded={handleEnd}
          volume={0.7}
          aspect={16 / 9}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default WistiaVideoPlayer;