import React, { useState } from 'react';
import GraduationInvitation from './components/GraduationInvitation';
import { InvitationCover } from './components/InvitationCover';
import { MusicPlayer } from './components/MusicPlayer';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <div className="invitation-content">
        <GraduationInvitation />
        {isOpened && <MusicPlayer />}
      </div>
      {!isOpened && <InvitationCover onOpen={() => setIsOpened(true)} />}
    </>
  );
};

export default App;
