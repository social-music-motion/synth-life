import React, { useState } from 'react';
import PlayPauseButton from '../components/PlayPauseButton'

const Playbar = () => {
  const [ step, setStep ] = useState(0)
  // play button
  // when clicked - starts a setInterval that moves the step forward by one
  // if the current pad is active, it plays the sound
  // stop button/second click activates the timeoutID
   // test tempo
   let tempo = 600;

   const startPauseSequence = () => {
     const timeoutID = setInterval(() => {
      let step = 1;
      console.log(step)
      step++
     }, tempo)
  
     
    }
  return (
    <div>
      Playbar
      <PlayPauseButton startPauseSequence={startPauseSequence}/>
    </div>
  );
}

export default Playbar;