import React from 'react';

const styles = {
  fontFamily: "'Gwendolyn', cursive",
};

export default function PsudoElements({ elem, classNames }) {
  return (
    <div className={`text-psudoElemColor absolute ${classNames} italic text-5xl z-50`} style={styles}>
      {elem}
    </div>
  )
}
