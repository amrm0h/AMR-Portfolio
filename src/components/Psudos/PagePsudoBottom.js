import React from 'react'
import PsudoElements from './PsudoElements'

export default function PagePsudoBottom() {
  return (
    <>
      <PsudoElements elem="<body>" classNames="bottom-16 pl-8 md:top-16 flex items-end" />
      <PsudoElements elem="<html>" classNames="bottom-5 md:top-5 flex items-end" />
    </>
  )
}
