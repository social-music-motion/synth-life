import React, { useState } from 'react'
import kick from '../assets/soundLibrary/kick.wav'

const Pad = ({ isActive, id }) => {
  const [playingColor, setPlayingColor] = useState('red')
  const handleClick = () => {
    isActive(id)
    // if green play the sound one time
    if (playingColor === 'red'){
      const audio = new Audio(kick);
      audio.play();
    }
    setPlayingColor(playingColor === 'red' ? 'green' : 'red');
  
  }
  
  return (
    <div className='pad' onClick={handleClick} style={{backgroundColor: playingColor}}>
    pad
    </div>
  )
}

export default Pad;