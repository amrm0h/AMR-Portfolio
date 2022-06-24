import React from 'react'
import PsudoElements from './PsudoElements'

export default function PagePsudoTop() {
  return (
    <>
      <PsudoElements elem="<html>" classNames="top-48 md:top-5" />
      <PsudoElements elem="<body>" classNames="top-60 pl-8 md:top-16" />
    </>
  )
}
