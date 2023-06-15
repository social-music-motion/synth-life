import React from 'react';
import Pad from '../components/Pad';

const PadSequence = () => {

  const pads = [];
  for (let i = 0; i < 16; i++) {
    pads.push(< Pad />);
  }
  return (
    <div>
      {pads}
    </div>
  )
}

export default PadSequence;