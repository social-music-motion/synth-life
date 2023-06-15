import React, { useState } from 'react';
import Playbar from './Playbar';
import PadSequence from './PadSequence';

const Sequencer = () => {
  const [ sequence, setSequence ] = useState([false, false, false, false, false, false, false, false, false, false, false, false])
  
  const setActive = (id) => {
    const newSequence = sequence.slice();
    newSequence[id] = !newSequence[id];
    setSequence(newSequence);
  }
  
  return (
    <div className='sequencer'>
      <Playbar />
      <PadSequence setActive={setActive}/>
    </div>
  )
}

export default Sequencer;