import React from 'react';

const PlayPauseButton = ({ startPauseSequence }) => {
  return (
    <button onClick={startPauseSequence}>
      START/PAUSE
    </button>
  )
}

export default PlayPauseButton;