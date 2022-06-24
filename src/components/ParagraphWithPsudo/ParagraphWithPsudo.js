import React from 'react'
import PsudoParagraph from '../Psudos/PsudoParagraph'

export default function ParagraphWithPsudo({ children = [], textClassName }) {
  return (
    <p className={`${textClassName} font-bold transition-all relative` }>
      <PsudoParagraph />
      {children}
    </p>
  )
}
