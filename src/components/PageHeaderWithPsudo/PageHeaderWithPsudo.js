import React from 'react'
import PsudoHeading from '../Psudos/PsudoHeading'

export default function PageHeaderWithPsudo({ children, headerClassName }) {
  return (
    <h1 className={`${headerClassName} font-bold transition-all relative` }>
      <PsudoHeading />
      {children}
    </h1>
  )
}
