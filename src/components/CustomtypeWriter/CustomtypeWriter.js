import React from 'react';
import Typewriter from 'typewriter-effect';


export default function CustomtypeWriter({ str, pause, delay }) {
  return (
    <Typewriter
      onInit={typeWriter => typeWriter.pauseFor(pause)
        .typeString(str).start()}
      options={{
        cursorClassName: "typeWriterCursor",
        delay,
        autoStart: true,
      }}
    />
  );
}