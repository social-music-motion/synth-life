import React, { useState } from 'react';
import Pad from '../components/Pad';

const PadSequence = ({ setActive }) => {
  // const [ sequence, setSequence ] = useState([false, false, false, false, false, false, false, false, false, false, false, false])
 
  // const isActive = (id) => {
  //   const newSequence = sequence.slice();
  //   newSequence[id] = !newSequence[id];
  //   setSequence(newSequence);
  // }
  
  const pads = [];
  for (let i = 0; i < 16; i++) {
    pads.push(<Pad id={i} setActive={setActive} />);
  }
  
  return (
    <div className='pad-sequence'>
      {pads}
    </div>
  )
}

export default PadSequence;