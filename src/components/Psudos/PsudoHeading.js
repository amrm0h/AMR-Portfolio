import React from 'react';
import PsudoElements from './PsudoElements';

export default function PsudoHeading() {
  return (
    <>
      <PsudoElements elem="<h1>" classNames="-top-12 md:-left-4" />
      <PsudoElements elem="</h1>" classNames="-bottom-14 md:-left-4" />
    </>
  )
}
