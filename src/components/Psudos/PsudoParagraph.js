import React from 'react';
import PsudoElements from './PsudoElements';

export default function PsudoParagraph() {
  return (
    <>
      <PsudoElements elem="<p>" classNames="-top-12 md:-left-4" />
      <PsudoElements elem="</p>" classNames="-bottom-14 md:-left-4" />
    </>
  )
}