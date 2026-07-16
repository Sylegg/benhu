import React, { useState } from 'react';
import GraduationInvitation from './components/GraduationInvitation';
import { InvitationCover } from './components/InvitationCover';
import { MusicPlayer } from './components/MusicPlayer';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  return (
    <>
      <div className={`invitation-content ${!isOpening && !isOpened ? 'is-covered' : ''}`}>
        <GraduationInvitation />
        {isOpened && <MusicPlayer />}
      </div>
      {!isOpened && (
        <InvitationCover
          onOpening={() => setIsOpening(true)}
          onOpen={() => setIsOpened(true)}
        />
      )}
    </>
  );
};

export default App;
