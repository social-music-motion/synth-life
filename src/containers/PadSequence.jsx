import React, { useState } from 'react';
import Pad from '../components/Pad';

const PadSequence = () => {
  const [ sequenceOnOff, setSequenceOnOff ] = useState([false, false, false, false, false, false, false, false, false, false, false, false])
 
  const isActive = (id) => {
    const newSequence = sequenceOnOff.slice()
    newSequence[id] = !newSequence[id];
    setSequenceOnOff(newSequence)
  }
  
  const pads = [];
  for (let i = 0; i < 16; i++) {
    pads.push(<Pad id={i} isActive={isActive} />);
  }
  
  return (
    <div className='pad-sequence'>
      {pads}
    </div>
  )
}

export default PadSequence;